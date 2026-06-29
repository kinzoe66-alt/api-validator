const {
  extractResourceIdentifiers
} = require("../playwright/network/resources/extractResourceIdentifiers");

const resources =
  extractResourceIdentifiers([
    {
      method: "GET",
      url: "https://example.com/api/users/12345"
    },
    {
      method: "GET",
      url: "https://example.com/api/orders/550e8400-e29b-41d4-a716-446655440000"
    }
  ]);

if (
  resources.length !== 2 ||
  resources[0].identifiers[0] !== "12345" ||
  resources[1].identifiers.length !== 1
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("RESOURCE IDENTIFIER EXTRACTION VERIFIED");
