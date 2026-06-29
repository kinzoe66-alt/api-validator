const {
  extractResourceIdentifiers
} = require("../../playwright/network/resources/extractResourceIdentifiers");

const {
  buildMutationPlan
} = require("../../playwright/network/scenarios/buildMutationPlan");

function plan(exchange) {
  const resources =
    extractResourceIdentifiers([
      {
        method: exchange.request.method,
        url: exchange.request.url
      }
    ]);

  return buildMutationPlan(resources);
}

module.exports = plan;
