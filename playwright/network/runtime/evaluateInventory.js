const {
  evaluateExchange
} = require("./evaluateExchange");

const {
  selectContract
} = require("../contracts/selectContract");

function evaluateInventory(exchangeInventory) {
  const results = [];

  for (const exchange of exchangeInventory.exchanges) {
    if (!selectContract(exchange)) {
      continue;
    }

    results.push({
      exchange,
      evaluation: evaluateExchange(exchange)
    });
  }

  return Object.freeze(results);
}

module.exports = { evaluateInventory };
