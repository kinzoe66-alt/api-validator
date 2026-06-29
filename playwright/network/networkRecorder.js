const {
  buildHttpExchange
} = require("./builders/buildHttpExchange");

async function attachNetworkRecorder(page) {
  const requests = new Map();
  const exchanges = [];

  page.on("request", request => {
    requests.set(request, {
      method: request.method(),
      url: request.url(),
      headers: request.headers()
    });
  });

  page.on("response", async response => {
    const request = response.request();

    const recorded = requests.get(request);

    exchanges.push(
      buildHttpExchange({
        request: recorded,
        response: {
          status: response.status(),
          url: response.url(),
          headers: await response.allHeaders()
        }
      })
    );
  });

  return exchanges;
}

module.exports = { attachNetworkRecorder };
