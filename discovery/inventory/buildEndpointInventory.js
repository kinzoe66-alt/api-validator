class EndpointInventory {
  constructor(endpoints) {
    this.endpoints = Object.freeze(endpoints);
    Object.freeze(this);
  }
}

function buildEndpointInventory(traffic) {
  const endpoints = [];

  for (const entry of traffic) {
    if (!entry.method) {
      continue;
    }

    if (!endpoints.find(e =>
      e.method === entry.method &&
      e.url === entry.url
    )) {
      endpoints.push({
        method: entry.method,
        url: entry.url
      });
    }
  }

  return new EndpointInventory(endpoints);
}

module.exports = { buildEndpointInventory };
