class Finding {
  constructor({
    scenario,
    evidence,
    severity
  }) {
    this.scenario = scenario;
    this.evidence = evidence;
    this.severity = severity;

    Object.freeze(this);
  }
}

module.exports = { Finding };
