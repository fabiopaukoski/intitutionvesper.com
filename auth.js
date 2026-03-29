import { ADMIN_LOGIN, ADMIN_PASSWORD, USER_LOGIN, USER_PASSWORD } from "./data.js";

const STORAGE_KEY = "sanguinis_session";

export function tryLogin(email, password) {
  const isAdmin = email === ADMIN_LOGIN && password === ADMIN_PASSWORD;
  if (isAdmin) return { ok: true, session: { level: "admin", email } };

  const isUser = email === USER_LOGIN && password === USER_PASSWORD;
  if (isUser) return { ok: true, session: { level: "user", email } };

  return { ok: false, message: "Credenciais inválidas. Acesso negado." };
}

export function tryAdminUnlock(email, password) {
  const isAdmin = email === ADMIN_LOGIN && password === ADMIN_PASSWORD;
  if (isAdmin) return { ok: true, session: { level: "admin", email } };
  return { ok: false, message: "Credencial administrativa inválida." };
}

export function saveSession(session) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function loadSession() {
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

export function clearSession() {
  localStorage.removeItem(STORAGE_KEY);
}
