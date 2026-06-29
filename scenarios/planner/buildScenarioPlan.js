function buildScenarioPlan(resources) {
  const plan = [];

  for (const resource of resources) {
    if (resource.segments.length === 0) {
      continue;
    }

    plan.push({
      scenario: "resource-access",
      resource
    });
  }

  return plan;
}

module.exports = { buildScenarioPlan };
