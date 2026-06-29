async function replayRequest(page, replay) {
  return page.evaluate(async request => {
    const response = await fetch(request.url, {
      method: request.method,
      headers: request.headers
    });

    return {
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      body: await response.text()
    };
  }, replay);
}

module.exports = { replayRequest };
