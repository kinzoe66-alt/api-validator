const { HttpExchange } = require("../model/httpExchange");

function buildHttpExchange({
  request,
  response
}) {
  return new HttpExchange({
    request,
    response
  });
}

module.exports = { buildHttpExchange };
