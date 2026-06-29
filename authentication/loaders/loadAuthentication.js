const fs = require("fs");
const YAML = require("yaml");
const { Authentication } = require("../model/authentication");

function loadAuthentication(path) {
  return new Authentication(
    YAML.parse(fs.readFileSync(path, "utf8"))
  );
}

module.exports = { loadAuthentication };
