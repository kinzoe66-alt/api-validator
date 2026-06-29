const { ObservedReality } = require("../model/observedReality");

function buildObservedReality(data) {
  return new ObservedReality(data);
}

module.exports = { buildObservedReality };
