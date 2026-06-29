const {
  replayExchange
} = require("../../playwright/network/execution/replayExchange");

const replay =
require("./replay");

const observe =
require("./observe");

async function execute(page, exchange, mutation) {
  const replayRequest =
    replay(exchange, mutation);

  const response =
    await replayExchange(
      page,
      replayRequest
    );

  return observe({
    request: replayRequest,
    response
  });
}

module.exports = execute;
