const { Evidence } = require("../model/evidence");

function buildEvidence(data) {
  return new Evidence(data);
}

module.exports = { buildEvidence };
