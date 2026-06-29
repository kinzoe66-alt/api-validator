function buildMutationPlan(resources) {
  const plan = [];

  for (const resource of resources) {
    if (resource.identifiers.length === 0) {
      continue;
    }

    for (const identifier of resource.identifiers) {
      plan.push({
        path: resource.path,
        identifier,
        mutations: [
          "increment",
          "decrement",
          "zero",
          "negative",
          "random"
        ]
      });
    }
  }

  return Object.freeze(plan);
}

module.exports = { buildMutationPlan };
