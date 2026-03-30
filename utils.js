(function (global) {
  function extractNotes(content) {
    return content
      .split("\n")
      .filter((line) => line.startsWith("[Anotação DS]"))
      .map((line) => line.replace("[Anotação DS] ", ""));
  }

  function stripNotes(content) {
    return content
      .split("\n")
      .filter((line) => !line.startsWith("[Anotação DS]"))
      .join("\n");
  }

  function matchesSearch(parts, query) {
    if (!query.trim()) return true;
    return parts.join(" ").toLowerCase().includes(query.toLowerCase());
  }

  function isProtected(adminOnly, accessLevel) {
    return Boolean(adminOnly && accessLevel !== "admin");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  global.SanguinisUtils = {
    extractNotes,
    stripNotes,
    matchesSearch,
    isProtected,
    escapeHtml,
  };
})(window);
