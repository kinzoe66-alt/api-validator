async function executeDiscoveryPlan(plan, runtimeFactory) {
  const results = [];

  for (const step of plan) {
    const runtime = await runtimeFactory(step);

    results.push({
      target: step.target,
      runtime
    });
  }

  return results;
}

module.exports = { executeDiscoveryPlan };
