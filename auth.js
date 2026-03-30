(function (global) {
  const STORAGE_KEY = "sanguinis_session";

  function tryLogin(email, password) {
    const { ADMIN_LOGIN, ADMIN_PASSWORD, USER_LOGIN, USER_PASSWORD } = global.SanguinisData;

    const isAdmin = email === ADMIN_LOGIN && password === ADMIN_PASSWORD;
    if (isAdmin) return { ok: true, session: { level: "admin", email } };

    const isUser = email === USER_LOGIN && password === USER_PASSWORD;
    if (isUser) return { ok: true, session: { level: "user", email } };

    return { ok: false, message: "Credenciais inválidas. Acesso negado." };
  }

  function tryAdminUnlock(email, password) {
    const { ADMIN_LOGIN, ADMIN_PASSWORD } = global.SanguinisData;
    const isAdmin = email === ADMIN_LOGIN && password === ADMIN_PASSWORD;
    if (isAdmin) return { ok: true, session: { level: "admin", email } };
    return { ok: false, message: "Credencial administrativa inválida." };
  }

  function saveSession(session) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }

  function loadSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.email || !parsed.level) return null;
      return parsed;
    } catch {
      return null;
    }
  }

  function clearSession() {
    localStorage.removeItem(STORAGE_KEY);
  }

  global.SanguinisAuth = {
    tryLogin,
    tryAdminUnlock,
    saveSession,
    loadSession,
    clearSession,
  };
})(window);
