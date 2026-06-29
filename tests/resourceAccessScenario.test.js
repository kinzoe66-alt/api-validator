const applies =
require("../scenarios/resource-access/applies");

const plan =
require("../scenarios/resource-access/plan");

const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const exchange =
  buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/users/123"
    },
    response: {
      status: 200
    }
  });

if (!applies(exchange)) {
  console.error("FAIL");
  process.exit(1);
}

const mutationPlan =
  plan(exchange);

if (
  mutationPlan.length !== 1 ||
  mutationPlan[0].identifier !== "123"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "RESOURCE ACCESS SCENARIO VERIFIED"
);
