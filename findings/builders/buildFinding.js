const { Finding } = require("../model/finding");

function buildFinding(data) {
  return new Finding(data);
}

module.exports = { buildFinding };
