const {
  buildEndpointInventory
} = require("../discovery/inventory/buildEndpointInventory");

const {
  buildResourceInventory
} = require("../resource-model/inventory/buildResourceInventory");

const {
  classifyResources
} = require("../resource-model/classification/classifyResources");

const {
  buildScenarioPlan
} = require("../scenarios/planner/buildScenarioPlan");

const endpoints = buildEndpointInventory([
  {
    method: "GET",
    url: "https://example.com/api/users/123"
  },
  {
    method: "POST",
    url: "https://example.com/api/orders"
  }
]);

const resources =
  classifyResources(
    buildResourceInventory(endpoints)
  );

const plan =
  buildScenarioPlan(resources);

if (
  plan.length !== 2 ||
  plan[0].scenario !== "resource-access"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("SCENARIO PLAN VERIFIED");
