function extractEndpoints(exchangeInventory) {
  const endpoints = [];

  for (const exchange of exchangeInventory.exchanges) {
    const endpoint = {
      method: exchange.request.method,
      url: exchange.request.url,
      status: exchange.response.status
    };

    if (
      !endpoints.find(e =>
        e.method === endpoint.method &&
        e.url === endpoint.url
      )
    ) {
      endpoints.push(endpoint);
    }
  }

  return Object.freeze(endpoints);
}

module.exports = { extractEndpoints };
