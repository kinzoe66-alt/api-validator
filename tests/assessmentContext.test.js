const {
  AssessmentContext
} = require("../runtime/context/assessmentContext");

const context = new AssessmentContext({
  session: {},
  scope: [],
  inventory: {}
});

if (
  !context.session ||
  !Array.isArray(context.scope) ||
  !context.inventory
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("ASSESSMENT CONTEXT VERIFIED");
