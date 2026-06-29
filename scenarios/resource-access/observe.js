const {
  buildReplayObservation
} = require("../../playwright/network/observations/buildReplayObservation");

function observe(replayResult) {
  return buildReplayObservation({
    replay: {
      method: replayResult.request.method,
      url: replayResult.request.url
    },
    response: {
      status: replayResult.response.status
    }
  });
}

module.exports = observe;
