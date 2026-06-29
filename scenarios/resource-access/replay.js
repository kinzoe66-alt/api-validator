const {
  buildReplayRequest
} = require("../../playwright/network/replay/buildReplayRequest");

function replay(exchange, mutation) {
  return buildReplayRequest(
    exchange,
    {
      identifier: mutation.identifier,
      strategy: "increment"
    }
  );
}

module.exports = replay;
