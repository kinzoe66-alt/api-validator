const { AssessmentPlan } =
require("../runtime/model/assessmentPlan");

const plan = new AssessmentPlan({
  startUrl: "https://example.com",
  actions: [
    {
      type: "goto",
      url: "https://example.com"
    }
  ]
});

if (
  plan.startUrl !== "https://example.com" ||
  plan.actions.length !== 1
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("ASSESSMENT PLAN VERIFIED");
