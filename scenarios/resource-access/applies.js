function applies(exchange) {
  if (exchange.request.method !== "GET") {
    return false;
  }

  const path =
    new URL(exchange.request.url).pathname;

  return /^\/api\//.test(path);
}

module.exports = applies;
