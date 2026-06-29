class RuntimeContext {
  constructor({
    scope,
    authentication,
    discovery,
    resourceModel,
    scenario,
    observedReality
  }) {
    this.scope = scope;
    this.authentication = authentication;
    this.discovery = discovery;
    this.resourceModel = resourceModel;
    this.scenario = scenario;
    this.observedReality = observedReality;

    Object.freeze(this);
  }
}

module.exports = { RuntimeContext };
