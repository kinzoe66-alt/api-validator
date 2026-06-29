const fs = require("fs");
const YAML = require("yaml");
const { ResourceModel } = require("../model/resourceModel");

function loadResourceModel(path) {
  return new ResourceModel(
    YAML.parse(fs.readFileSync(path, "utf8"))
  );
}

module.exports = { loadResourceModel };
