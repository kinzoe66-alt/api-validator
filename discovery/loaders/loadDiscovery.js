const fs = require("fs");
const YAML = require("yaml");
const { Discovery } = require("../model/discovery");

function loadDiscovery(path) {
  return new Discovery(
    YAML.parse(fs.readFileSync(path, "utf8"))
  );
}

module.exports = { loadDiscovery };
