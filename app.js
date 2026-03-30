(function (global) {
  const { allDocs, dossierDocs, emails } = global.SanguinisData;
  const { clearSession, loadSession, saveSession, tryAdminUnlock, tryLogin } = global.SanguinisAuth;
  const { escapeHtml, extractNotes, isProtected, matchesSearch, stripNotes } = global.SanguinisUtils;

  const app = document.getElementById("app");

  const state = {
    session: loadSession(),
    query: "",
    tab: "todos",
    selectedId: allDocs[0] ? allDocs[0].id : "",
  };

  function iconSvg(name) {
    const common = 'stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
    const icons = {
      flask: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><path d="M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 8V2"/><path d="M8 12h8"/></svg>`,
      database: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>`,
      mail: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
      file: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/></svg>`,
      lock: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></svg>`,
      eye: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="3"/></svg>`,
      search: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
      userCog: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><circle cx="9" cy="8" r="4"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="18" cy="17" r="2.5"/><path d="m18 13.5.5 1.2 1.3.3-.9 1 .2 1.3-1.1-.6-1.1.6.2-1.3-.9-1 1.3-.3.5-1.2Z"/></svg>`,
      logout: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
      chevron: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><path d="m9 18 6-6-6-6"/></svg>`,
      alert: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.8 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"/></svg>`,
      shield: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><path d="M12 3 5 6v6c0 5 3.4 8.6 7 10 3.6-1.4 7-5 7-10V6l-7-3Z"/></svg>`,
      key: `<svg viewBox="0 0 24 24" width="16" height="16" ${common}><circle cx="7.5" cy="15.5" r="4.5"/><path d="M21 2l-9.7 9.7"/><path d="M15 8h3v3h3v3"/></svg>`,
    };
    return icons[name] || icons.file;
  }

  function getFilteredDocs() {
    return allDocs.filter((doc) => {
      const matchesTab = state.tab === "todos" ? true : doc.category === state.tab;
      const matches = matchesSearch([doc.title, doc.code, doc.content, doc.author, doc.type], state.query);
      return matchesTab && matches;
    });
  }

  function getSelected(filtered) {
    return filtered.find((doc) => doc.id === state.selectedId) || filtered[0] || allDocs[0] || null;
  }

  function tagClass(status) {
    if (status === "Compilado") return "tag green";
    if (status === "Apreendido") return "tag amber";
    if (status === "Ativo") return "tag red";
    return "tag cyan";
  }

  function statBox(icon, label, value) {
    return `
      <div class="stat-box">
        <div class="stat-row">${iconSvg(icon)} <span>${escapeHtml(label)}</span></div>
        <div class="stat-value">${escapeHtml(String(value))}</div>
      </div>
    `;
  }

  function tabButton(value, label) {
    const active = state.tab === value ? "active" : "";
    return `<button class="tab-btn ${active}" data-tab="${escapeHtml(value)}">${escapeHtml(label)}</button>`;
  }

  function renderLogin() {
    app.innerHTML = `
      <div class="page-shell">
        <div class="card grid-login">
          <div class="login-left">
            <div class="badge-pill">${iconSvg("flask")} Unidade Rubra • Acesso Interno</div>
            <h1 class="h1" style="margin-top:16px;">Sistema Arquivístico — Sanguinis</h1>
            <p class="muted" style="max-width:640px; margin-top:18px; line-height:1.8;">
              Plataforma interna de leitura e indexação de relatórios, incidentes, memorandos e correspondência operacional vinculados à Boate Véspera e ao Projeto Sanguinis.
            </p>
            <div class="info-grid">
              <div class="info-box">
                <div class="info-box-title muted">${iconSvg("database")} Arquivo vivo</div>
                <div class="muted" style="margin-top:10px; line-height:1.8;">Consulta centralizada de dossiês técnicos, lotes, registros de incidente e mensagens internas recuperadas.</div>
              </div>
              <div class="info-box" style="border-color: rgba(252,211,77,0.15); background: rgba(252,211,77,0.05);">
                <div class="info-box-title" style="color:#fcd34d;">${iconSvg("lock")} Controle hierárquico</div>
                <div class="muted" style="margin-top:10px; line-height:1.8;">Certos e-mails e documentos sensíveis exigem credencial administrativa adicional para leitura completa.</div>
              </div>
            </div>
            <div class="inline-box" style="margin-top:28px; background: rgba(0,0,0,0.2);">
              <div class="info-box-title muted">Aviso operacional</div>
              <div class="reader-pre" style="font-family: var(--font-mono); margin-top:10px; color: rgba(230,247,255,0.8);">Acesso restrito. Toda autenticação é registrada. Tentativas inválidas podem acionar auditoria interna.</div>
            </div>
          </div>
          <div class="login-right">
            <div class="card" style="padding:28px; background: linear-gradient(180deg, rgba(9,21,27,0.98), rgba(7,13,18,0.98));">
              <div class="h2" style="display:flex; gap:10px; align-items:center;">${iconSvg("key")} Entrar no sistema</div>
              <div class="form-group" style="margin-top:20px;">
                <label class="label" for="login-email">Login</label>
                <input id="login-email" class="input" placeholder="usuario@stv.org" />
              </div>
              <div class="form-group">
                <label class="label" for="login-password">Senha</label>
                <input id="login-password" class="input" type="password" placeholder="••••••••••••" />
              </div>
              <div id="login-feedback" class="notice">Credenciais com hierarquia elevada liberam materiais adicionais protegidos do arquivo.</div>
              <button id="login-btn" class="btn full" style="margin-top:16px;">Autenticar</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
    const feedback = document.getElementById("login-feedback");

    const submit = () => {
      const result = tryLogin(email.value, password.value);
      if (!result.ok) {
        feedback.className = "error";
        feedback.textContent = result.message;
        return;
      }
      state.session = result.session;
      saveSession(result.session);
      render();
    };

    document.getElementById("login-btn").addEventListener("click", submit);
    password.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submit();
    });
  }

  function renderAdminPanel() {
    if (state.session.level === "admin") {
      return `
        <div class="reader-side-box green">
          <div class="reader-box-title" style="color: var(--emerald);">${iconSvg("userCog")} Acesso administrativo ativo</div>
          <div class="muted" style="margin-top:10px; line-height:1.8; color:#dbfff0;">Todos os arquivos sensíveis protegidos estão liberados nesta sessão.</div>
        </div>
      `;
    }

    return `
      <div class="reader-side-box amber">
        <div class="reader-box-title" style="color: var(--amber);">${iconSvg("userCog")} Desbloqueio administrativo</div>
        <div class="muted" style="margin-top:10px; line-height:1.8;">Alguns e-mails e documentos sensíveis exigem autenticação elevada para leitura completa.</div>
        <div style="margin-top:14px; display:grid; gap:10px;">
          <input id="admin-email" class="input" placeholder="login administrativo" />
          <input id="admin-password" class="input" type="password" placeholder="senha administrativa" />
          <div id="admin-feedback" class="notice">Use uma credencial de administrador para liberar os arquivos protegidos.</div>
          <button id="admin-unlock-btn" class="btn amber full">Liberar arquivos protegidos</button>
        </div>
      </div>
    `;
  }

  function renderDocCard(doc) {
    const active = doc.id === state.selectedId;
    const locked = isProtected(doc.adminOnly, state.session.level);
    const statusClass = tagClass(doc.status);
    const iconBoxClass = locked ? "doc-icon-box locked" : "doc-icon-box";
    const cardClass = active ? "doc-card active" : "doc-card";

    return `
      <button class="${cardClass}" data-doc-id="${escapeHtml(doc.id)}">
        <div class="doc-row">
          <div class="doc-left">
            <div class="${iconBoxClass}">${locked ? iconSvg("lock") : iconSvg(doc.category === "E-mails" ? "mail" : "file")}</div>
            <div style="min-width:0;">
              <div class="doc-title">${escapeHtml(doc.title)}</div>
              <div class="doc-sub">${escapeHtml(doc.code)} • ${escapeHtml(doc.date)}</div>
            </div>
          </div>
          <div style="color: rgba(255,255,255,0.3);">${iconSvg("chevron")}</div>
        </div>
        <div class="doc-tags">
          <span class="tag">${escapeHtml(doc.category)}</span>
          ${locked ? `<span class="tag amber">Admin</span>` : ""}
          <span class="${statusClass}">${escapeHtml(doc.status)}</span>
        </div>
      </button>
    `;
  }

  function renderReader(doc, locked, noteLines, cleanContent) {
    return `
      <div class="reader-panel">
        <div class="reader-header">
          <div class="reader-top">
            <div>
              <div class="doc-tags" style="margin-top:0; margin-bottom:12px;">
                <span class="tag cyan">${escapeHtml(doc.code)}</span>
                <span class="tag">${escapeHtml(doc.type)}</span>
                ${doc.adminOnly ? `<span class="tag amber">Admin</span>` : ""}
                <span class="${tagClass(doc.status)}">${escapeHtml(doc.status)}</span>
              </div>
              <div class="h2" style="font-size: clamp(24px, 3vw, 40px);">${escapeHtml(doc.title)}</div>
              <div class="muted" style="margin-top:10px;">${escapeHtml(doc.classification)}</div>
            </div>
            <div class="reader-meta">
              <div><span class="meta-label">Data:</span> ${escapeHtml(doc.date)}</div>
              <div><span class="meta-label">Registro:</span> ${escapeHtml(doc.author)}</div>
              <div><span class="meta-label">Categoria:</span> ${escapeHtml(doc.category)}</div>
            </div>
          </div>
        </div>

        <div class="reader-grid">
          <div class="reader-main">
            <div class="reader-box-title muted" style="display:flex; gap:8px; align-items:center; margin-bottom:16px;">
              ${locked ? iconSvg("lock") : iconSvg("eye")} ${locked ? "Arquivo bloqueado" : "Leitura do arquivo"}
            </div>
            ${locked ? `
              <div class="reader-locked">
                <div style="color: var(--amber);">${iconSvg("lock")}</div>
                <div style="font-size: 26px; font-weight: 700; margin-top: 12px;">Acesso administrativo necessário</div>
                <div class="muted" style="max-width: 520px; margin-top: 12px; line-height: 1.8;">
                  Este arquivo pertence a uma camada protegida e não pode ser lido com a credencial padrão atual. Use o desbloqueio administrativo na lateral para liberar o conteúdo.
                </div>
              </div>
            ` : `<div class="reader-pre">${escapeHtml(cleanContent)}</div>`}
          </div>

          <div class="reader-side">
            <div class="reader-side-box green">
              <div class="reader-box-title" style="color: var(--emerald);">${iconSvg("shield")} Triagem automática</div>
              <div class="muted" style="margin-top:10px; line-height:1.8;">
                • Documento vinculado ao Projeto Sanguinis<br />
                • Indexado por código interno<br />
                • Visualização liberada em modo leitura<br />
                • Referências cruzadas podem existir em outros arquivos
              </div>
            </div>

            ${locked ? `
              <div class="reader-side-box amber">
                <div class="reader-box-title" style="color: var(--amber);">${iconSvg("lock")} Restrição hierárquica</div>
                <div class="muted" style="margin-top:10px; line-height:1.8;">
                  O cabeçalho foi indexado, mas o corpo integral deste arquivo está oculto nesta sessão.
                </div>
              </div>
            ` : noteLines.length > 0 ? noteLines.map((note) => `
              <div class="reader-side-box sky">
                <div class="reader-box-title" style="color:#bae6fd;">Anotação marginal</div>
                <div style="margin-top:10px; line-height:1.8; color:#e0f2fe;">${escapeHtml(note)}</div>
              </div>
            `).join("") : `
              <div class="reader-side-box">
                <div class="muted">Nenhuma anotação marginal detectada neste arquivo.</div>
              </div>
            `}

            <div class="reader-side-box amber">
              <div class="reader-box-title" style="color: var(--amber);">${iconSvg("alert")} Aviso de manuseio</div>
              <div class="muted" style="margin-top:10px; line-height:1.8;">
                Cópias incompletas, linhas com tarja e conteúdo fragmentado podem indicar supressão deliberada, dano físico ou limpeza parcial de terminal.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderArchive() {
    const filtered = getFilteredDocs();
    const selected = getSelected(filtered);

    if (!selected && allDocs.length === 0) {
      app.innerHTML = `<div class="page-shell"><div class="card" style="max-width:900px;margin:0 auto;padding:40px;">Nenhum arquivo disponível.</div></div>`;
      return;
    }

    if (selected) state.selectedId = selected.id;

    const locked = selected ? isProtected(selected.adminOnly, state.session.level) : false;
    const noteLines = selected ? extractNotes(selected.content) : [];
    const cleanContent = selected ? stripNotes(selected.content) : "";

    app.innerHTML = `
      <div class="page-shell">
        <div class="archive-shell">
          <div class="card archive-main">
            <div class="archive-header">
              <div class="header-top">
                <div style="max-width:760px;">
                  <div class="badge-pill">${iconSvg("flask")} Unidade Rubra • Arquivo Laboratorial</div>
                  <h1 class="h2" style="margin-top:14px; font-size: clamp(30px,4vw,52px);">Sistema de Leitura — Sanguinis</h1>
                  <p class="muted" style="margin-top:14px; line-height:1.8; max-width:720px;">
                    Interface interna de consulta para documentos recuperados da Boate Véspera. Alguns e-mails e documentos sensíveis exigem credencial administrativa independente.
                  </p>
                </div>
                <div class="stats-grid">
                  ${statBox("database", "Arquivos", allDocs.length)}
                  ${statBox("database", "Dossiês", dossierDocs.length)}
                  ${statBox("mail", "E-mails", emails.length)}
                  ${statBox(state.session.level === "admin" ? "userCog" : "lock", "Sessão", state.session.level === "admin" ? "Admin" : "Padrão")}
                </div>
              </div>
              <div class="session-row">
                <div class="inline-box">Autenticado como <strong>${escapeHtml(state.session.email)}</strong></div>
                <button id="logout-btn" class="btn ghost">${iconSvg("logout")} Encerrar sessão</button>
              </div>
            </div>

            <div class="archive-grid">
              <div class="left-column">
                <div class="search-box">
                  <div class="reader-box-title" style="display:flex; gap:8px; align-items:center; margin-bottom:14px;">${iconSvg("search")} Pesquisa e filtros</div>
                  <div class="search-input-wrap">
                    <div class="icon">${iconSvg("search")}</div>
                    <input id="query-input" class="input search-input" value="${escapeHtml(state.query)}" placeholder="Buscar por código, lote, autor ou conteúdo..." />
                  </div>
                  <div class="tabs" style="margin-top:14px;">
                    ${tabButton("todos", "Todos")}
                    ${tabButton("Dossiê", "Dossiê")}
                    ${tabButton("E-mails", "E-mails")}
                  </div>
                </div>

                ${renderAdminPanel()}

                <div>
                  <div class="section-title" style="color: rgba(103,232,249,0.7); margin-bottom:12px;">Arquivos localizados</div>
                  ${filtered.length > 0 ? `<div class="docs-list">${filtered.map(renderDocCard).join("")}</div>` : `<div class="no-files">Nenhum arquivo corresponde aos filtros atuais.</div>`}
                </div>
              </div>

              <div>
                ${selected ? renderReader(selected, locked, noteLines, cleanContent) : `<div class="card" style="padding:24px;">Nenhum arquivo selecionado.</div>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("logout-btn").addEventListener("click", () => {
      clearSession();
      state.session = null;
      render();
    });

    document.getElementById("query-input").addEventListener("input", (event) => {
      state.query = event.target.value;
      renderArchive();
    });

    document.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.tab = button.getAttribute("data-tab");
        renderArchive();
      });
    });

    document.querySelectorAll("[data-doc-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedId = button.getAttribute("data-doc-id");
        renderArchive();
      });
    });

    const adminUnlockBtn = document.getElementById("admin-unlock-btn");
    if (adminUnlockBtn) {
      adminUnlockBtn.addEventListener("click", () => {
        const email = document.getElementById("admin-email").value;
        const password = document.getElementById("admin-password").value;
        const result = tryAdminUnlock(email, password);
        const feedback = document.getElementById("admin-feedback");
        if (!result.ok) {
          feedback.className = "error";
          feedback.textContent = result.message;
          return;
        }
        state.session = result.session;
        saveSession(result.session);
        renderArchive();
      });

      document.getElementById("admin-password").addEventListener("keydown", (e) => {
        if (e.key === "Enter") document.getElementById("admin-unlock-btn").click();
      });
    }
  }

  function render() {
    if (!state.session) {
      renderLogin();
      return;
    }
    renderArchive();
  }

  render();
})(window);
