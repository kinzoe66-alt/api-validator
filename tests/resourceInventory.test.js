const {
  buildEndpointInventory
} = require("../discovery/inventory/buildEndpointInventory");

const {
  buildResourceInventory
} = require("../resource-model/inventory/buildResourceInventory");

const endpoints = buildEndpointInventory([
  {
    method: "GET",
    url: "https://example.com/api/users"
  },
  {
    method: "POST",
    url: "https://example.com/api/login"
  }
]);

const resources =
  buildResourceInventory(endpoints);

if (
  resources.resources.length !== 2 ||
  resources.resources[0].path !== "/api/users"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("RESOURCE INVENTORY VERIFIED");
