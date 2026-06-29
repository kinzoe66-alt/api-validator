const { loadPastedScope } =
require("../scope/loaders/loadPastedScope");

const {
  buildDiscoveryPlan
} = require("../discovery/planner/buildDiscoveryPlan");

const targets = loadPastedScope(`
www.soundon.global
tiktok.com
*.tiktokcdn.com
com.zhiliaoapp.musically
835599320
`);

const plan = buildDiscoveryPlan(targets);

if (
  plan.length !== 2 ||
  plan[0].authenticate !== true ||
  plan[1].discover !== true
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("DISCOVERY PLAN VERIFIED");
