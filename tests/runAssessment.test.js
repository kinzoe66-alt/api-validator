const {
  runAssessment
} = require("../runtime/runAssessment");

(async () => {
  const report =
    await runAssessment(async runtime => {
      await runtime.page.goto(
        "https://example.com"
      );
    });

  if (!report || !Array.isArray(report.findings)) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log("ASSESSMENT RUNTIME VERIFIED");
})();
