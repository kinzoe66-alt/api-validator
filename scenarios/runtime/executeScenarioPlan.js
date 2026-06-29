async function executeScenarioPlan(plan, executor) {
  const observations = [];

  for (const item of plan) {
    observations.push(
      await executor(item)
    );
  }

  return observations;
}

module.exports = { executeScenarioPlan };
