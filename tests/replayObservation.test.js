const {
  buildReplayObservation
} = require("../playwright/network/observations/buildReplayObservation");

const observed =
  buildReplayObservation({
    replay: {
      method: "GET",
      url: "https://example.com/api/users/124"
    },
    response: {
      status: 403
    }
  });

if (
  observed.data.request_completed !== true ||
  observed.data.authorization_enforced !== true ||
  observed.data.status !== 403
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("REPLAY OBSERVATION VERIFIED");
