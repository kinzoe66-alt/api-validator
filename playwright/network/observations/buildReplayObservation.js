const {
  buildObservedReality
} = require("../../../observations/builders/buildObservedReality");

function buildReplayObservation({
  replay,
  response
}) {
  return buildObservedReality({
    authenticated: true,
    method: replay.method,
    url: replay.url,
    status: response.status,
    request_completed: true,
    authorization_enforced:
      response.status !== 200
  });
}

module.exports = { buildReplayObservation };
