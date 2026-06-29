#!/usr/bin/env node

const { runAssessment } =
require("../runtime/runAssessment");

(async () => {
  const report =
    await runAssessment(async runtime => {
      await runtime.page.goto(
        process.argv[2]
      );
    });

  console.log(
    JSON.stringify(report, null, 2)
  );
})();
