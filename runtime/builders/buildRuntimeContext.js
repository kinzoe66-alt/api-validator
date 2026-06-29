const { RuntimeContext } = require("../model/runtimeContext");

function buildRuntimeContext(data) {
  return new RuntimeContext(data);
}

module.exports = { buildRuntimeContext };
