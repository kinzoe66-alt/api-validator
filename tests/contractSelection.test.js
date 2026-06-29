const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  selectContract
} = require("../playwright/network/contracts/selectContract");

const exchange = buildHttpExchange({
  request: {
    method: "GET",
    url: "https://example.com/api/users/123"
  },
  response: {
    status: 403
  }
});

const contract = selectContract(exchange);

if (
  contract !==
  "contracts/api/resource-access.contract.yaml"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("CONTRACT SELECTION VERIFIED");
