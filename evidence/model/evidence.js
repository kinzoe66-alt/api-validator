class Evidence {
  constructor({
    scenario,
    observedReality,
    evaluationResult
  }) {
    this.scenario = scenario;
    this.observedReality = observedReality;
    this.evaluationResult = evaluationResult;

    Object.freeze(this);
  }
}

module.exports = { Evidence };
