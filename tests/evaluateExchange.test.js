const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  evaluateExchange
} = require("../playwright/network/runtime/evaluateExchange");

const exchange = buildHttpExchange({
  request: {
    method: "GET",
    url: "https://example.com/api/users/123"
  },
  response: {
    status: 403
  }
});

const result = evaluateExchange(exchange);

if (!result.satisfied) {
  console.error("FAIL");
  process.exit(1);
}

console.log("EXCHANGE EVALUATION VERIFIED");
