class ExchangeInventory {
  constructor(exchanges) {
    this.exchanges = Object.freeze(exchanges);
    Object.freeze(this);
  }
}

function buildExchangeInventory(exchanges) {
  return new ExchangeInventory(exchanges);
}

module.exports = { buildExchangeInventory };
