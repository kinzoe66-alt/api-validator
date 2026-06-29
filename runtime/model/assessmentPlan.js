class AssessmentPlan {
  constructor({
    startUrl,
    actions = []
  }) {
    this.startUrl = startUrl;
    this.actions = Object.freeze(actions);

    Object.freeze(this);
  }
}

module.exports = { AssessmentPlan };
