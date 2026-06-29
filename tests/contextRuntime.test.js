const {
  AssessmentContext
} = require("../runtime/context/assessmentContext");

const {
  runScenarios
} = require("../runtime/scenarios/runScenarios");

(async () => {
  const context =
    new AssessmentContext({
      session: {
        page: {}
      },
      scope: [],
      inventory: {
        exchanges: []
      }
    });

  const findings =
    await runScenarios(context);

  if (!Array.isArray(findings)) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log(
    "CONTEXT RUNTIME VERIFIED"
  );
})();
