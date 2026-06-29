async function executeAssessmentPlan(runtime, plan) {
  await runtime.page.goto(plan.startUrl);

  for (const action of plan.actions) {
    switch (action.type) {
      case "goto":
        await runtime.page.goto(action.url);
        break;

      case "click":
        await runtime.page.click(action.selector);
        break;

      case "fill":
        await runtime.page.fill(
          action.selector,
          action.value
        );
        break;

      default:
        throw new Error(
          `Unsupported action: ${action.type}`
        );
    }
  }
}

module.exports = { executeAssessmentPlan };
