const {
  buildEndpointInventory
} = require("../discovery/inventory/buildEndpointInventory");

const {
  buildResourceInventory
} = require("../resource-model/inventory/buildResourceInventory");

const {
  classifyResources
} = require("../resource-model/classification/classifyResources");

const endpoints = buildEndpointInventory([
  {
    method: "GET",
    url: "https://example.com/api/users/123"
  }
]);

const inventory =
  buildResourceInventory(endpoints);

const classified =
  classifyResources(inventory);

if (
  classified.length !== 1 ||
  classified[0].segments[0] !== "api" ||
  classified[0].segments[1] !== "users"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("RESOURCE CLASSIFICATION VERIFIED");
