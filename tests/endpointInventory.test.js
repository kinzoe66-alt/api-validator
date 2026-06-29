const {
  buildEndpointInventory
} = require("../discovery/inventory/buildEndpointInventory");

const inventory = buildEndpointInventory([
  {
    method: "GET",
    url: "https://example.com/api/users"
  },
  {
    method: "GET",
    url: "https://example.com/api/users"
  },
  {
    method: "POST",
    url: "https://example.com/api/login"
  }
]);

if (
  inventory.endpoints.length !== 2
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("ENDPOINT INVENTORY VERIFIED");
