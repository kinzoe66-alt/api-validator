const {
  extractResourceIdentifiers
} = require("../playwright/network/resources/extractResourceIdentifiers");

const {
  buildMutationPlan
} = require("../playwright/network/scenarios/buildMutationPlan");

const resources =
  extractResourceIdentifiers([
    {
      method: "GET",
      url: "https://example.com/api/users/12345"
    }
  ]);

const plan =
  buildMutationPlan(resources);

if (
  plan.length !== 1 ||
  plan[0].mutations.length !== 5
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("MUTATION PLAN VERIFIED");
