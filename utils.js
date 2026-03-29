export function extractNotes(content) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("[Anotação DS]"))
    .map((line) => line.replace("[Anotação DS] ", ""));
}

export function stripNotes(content) {
  return content
    .split("\n")
    .filter((line) => !line.startsWith("[Anotação DS]"))
    .join("\n");
}

export function matchesSearch(parts, query) {
  if (!query.trim()) return true;
  return parts.join(" ").toLowerCase().includes(query.toLowerCase());
}

export function isProtected(adminOnly, accessLevel) {
  return Boolean(adminOnly && accessLevel !== "admin");
}

export function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
