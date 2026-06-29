const { Report } = require("../model/report");

function buildReport(findings) {
  return new Report({
    findings
  });
}

module.exports = { buildReport };
