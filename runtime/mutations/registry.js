const strategies = {
  increment(id) {
    return String(Number(id) + 1);
  },

  decrement(id) {
    return String(Number(id) - 1);
  },

  zero() {
    return "0";
  },

  negative() {
    return "-1";
  },

  random() {
    return String(
      Math.floor(Math.random() * 1000000000)
    );
  }
};

function applyStrategy(name, identifier) {
  const strategy = strategies[name];

  if (!strategy) {
    throw new Error(
      `Unknown mutation strategy: ${name}`
    );
  }

  return strategy(identifier);
}

module.exports = {
  strategies,
  applyStrategy
};
