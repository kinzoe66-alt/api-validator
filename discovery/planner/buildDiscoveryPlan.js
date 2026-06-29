function buildDiscoveryPlan(targets) {
  return targets
    .filter(target => target.type === "domain")
    .map(target => ({
      target,
      protocol: "https",
      authenticate: true,
      discover: true
    }));
}

module.exports = { buildDiscoveryPlan };
