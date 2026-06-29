class Report {
  constructor({
    findings
  }) {
    this.findings = findings;

    Object.freeze(this);
  }
}

module.exports = { Report };
