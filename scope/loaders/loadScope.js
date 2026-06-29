const fs = require("fs");
const YAML = require("yaml");
const { Scope } = require("../model/scope");

function loadScope(path) {
  return new Scope(
    YAML.parse(fs.readFileSync(path, "utf8"))
  );
}

module.exports = { loadScope };
