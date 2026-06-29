const { applyMutation } =
require("../execution/applyMutation");

const { sanitizeHeaders } =
require("./sanitizeHeaders");

function buildReplayRequest(exchange, mutation) {
  const replayUrl = exchange.request.url.replace(
    mutation.identifier,
    applyMutation(
      mutation.identifier,
      mutation.strategy
    )
  );

  return {
    method: exchange.request.method,
    url: replayUrl,
    headers: sanitizeHeaders(
      exchange.request.headers || {}
    ),
    body: exchange.request.body ?? null,
    cookies: exchange.request.cookies ?? []
  };
}

module.exports = { buildReplayRequest };
