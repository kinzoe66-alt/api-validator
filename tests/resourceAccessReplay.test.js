const scenario =
require("../scenarios/resource-access/scenario");

const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const exchange = buildHttpExchange({
  request: {
    method: "GET",
    url: "https://example.com/api/users/123",
    headers: {}
  },
  response: {
    status: 200
  }
});

const plan = scenario.plan(exchange);

const replay = scenario.replay(
  exchange,
  plan[0]
);

if (
  replay.url !== "https://example.com/api/users/124"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("RESOURCE ACCESS REPLAY VERIFIED");
