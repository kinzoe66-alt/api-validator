const { loadPastedScope } =
require("../scope/loaders/loadPastedScope");

const {
  buildDiscoveryPlan
} = require("../discovery/planner/buildDiscoveryPlan");

const {
  executeDiscoveryPlan
} = require("../discovery/runtime/executeDiscoveryPlan");

(async () => {
  const targets = loadPastedScope(`
www.soundon.global
tiktok.com
*.tiktokcdn.com
`);

  const plan = buildDiscoveryPlan(targets);

  const results =
    await executeDiscoveryPlan(
      plan,
      async step => ({
        baseUrl: `https://${step.target.identifier}`
      })
    );

  if (
    results.length !== 2 ||
    results[0].runtime.baseUrl !==
      "https://www.soundon.global"
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log("DISCOVERY RUNTIME VERIFIED");
})();
