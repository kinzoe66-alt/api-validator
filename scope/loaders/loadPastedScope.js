const { normalizeScope } = require("../parser/normalizeScope");

function loadPastedScope(text) {
  return normalizeScope(
    text
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean)
  );
}

module.exports = { loadPastedScope };
