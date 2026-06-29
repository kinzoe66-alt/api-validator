const {
  applyStrategy
} = require("../../../runtime/mutations/registry");

function applyMutation(identifier, strategy) {
  return applyStrategy(
    strategy,
    identifier
  );
}

module.exports = {
  applyMutation
};
