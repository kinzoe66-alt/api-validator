const fs = require("fs");
const YAML = require("yaml");

const { PlaywrightAuthentication } = require("./playwrightAuthentication");

function loadPlaywrightAuthentication(path) {
  return new PlaywrightAuthentication(
    YAML.parse(fs.readFileSync(path, "utf8"))
  );
}

module.exports = { loadPlaywrightAuthentication };
