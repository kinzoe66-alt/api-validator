const {
  buildObservedReality
} = require("../../observations/builders/buildObservedReality");

function buildDiscoveryObservation({
  surface,
  traffic
}) {
  return buildObservedReality({
    target: surface.target.identifier,
    url: surface.url,
    title: surface.title,
    requests: traffic.filter(
      entry => entry.method
    ).length,
    responses: traffic.filter(
      entry => entry.status
    ).length
  });
}

module.exports = { buildDiscoveryObservation };
