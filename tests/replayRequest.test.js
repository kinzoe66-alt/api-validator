const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  buildReplayRequest
} = require("../playwright/network/replay/buildReplayRequest");

const exchange = buildHttpExchange({
  request: {
    method: "GET",
    url: "https://example.com/api/users/123",
    headers: {
      host: "example.com",
      authorization: "Bearer token"
    },
    body: null,
    cookies: [
      {
        name: "session",
        value: "abc"
      }
    ]
  },
  response: {
    status: 200
  }
});

const replay = buildReplayRequest(exchange, {
  identifier: "123",
  strategy: "increment"
});

if (
  replay.url !== "https://example.com/api/users/124" ||
  replay.headers.host ||
  replay.headers.authorization !== "Bearer token" ||
  replay.cookies.length !== 1
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("REPLAY REQUEST VERIFIED");
