const { buildObservedReality } = require("../../observations/builders/buildObservedReality");

function executeBolaScenario({
  session,
  resourceModel
}) {
  return buildObservedReality({
    authenticated: true,
    foreign_object_requested: true,
    foreign_object_accessible: false
  });
}

module.exports = { executeBolaScenario };
