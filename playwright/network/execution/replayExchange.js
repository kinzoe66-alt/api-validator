async function replayExchange(page, replay) {
  return page.evaluate(async exchange => {
    const response = await fetch(exchange.url, {
      method: exchange.method,
      headers: exchange.headers,
      body: exchange.body
    });

    return {
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      body: await response.text()
    };
  }, replay);
}

module.exports = { replayExchange };
