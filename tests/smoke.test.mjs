import assert from "node:assert/strict";
import { extractNotes, stripNotes, matchesSearch, isProtected } from "../utils.js";
import { tryLogin, tryAdminUnlock } from "../auth.js";

const sample = `Linha comum\n[Anotação DS] Nota um\nOutra linha\n[Anotação DS] Nota dois`;

assert.deepEqual(extractNotes(sample), ["Nota um", "Nota dois"]);
assert.equal(stripNotes(sample).includes("[Anotação DS]"), false);
assert.equal(stripNotes(sample).includes("Linha comum"), true);
assert.equal(matchesSearch(["HEMA-11", "Projeto Sanguinis"], "hema"), true);
assert.equal(matchesSearch(["MAIL-07"], "mail-07"), true);
assert.equal(matchesSearch(["Arquivo frio"], "corredor branco"), false);
assert.equal(isProtected(true, "user"), true);
assert.equal(isProtected(true, "admin"), false);
assert.equal(isProtected(false, "user"), false);
assert.equal(tryLogin("Wanderley@stv.org", "@w122jnheush").ok, true);
assert.equal(tryLogin("ArgnaldAndersen@stv.org.eg", "Vladmirandersen").ok, true);
assert.equal(tryLogin("x", "y").ok, false);
assert.equal(tryAdminUnlock("ArgnaldAndersen@stv.org.eg", "Vladmirandersen").ok, true);
assert.equal(tryAdminUnlock("x", "y").ok, false);

console.log("Todos os testes passaram.");
