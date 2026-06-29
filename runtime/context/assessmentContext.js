class AssessmentContext {
  constructor({
    session,
    scope,
    inventory
  }) {
    this.session = session;
    this.scope = scope;
    this.inventory = inventory;

    Object.freeze(this);
  }
}

module.exports = { AssessmentContext };
