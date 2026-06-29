class ResourceInventory {
  constructor(resources) {
    this.resources = Object.freeze(resources);
    Object.freeze(this);
  }
}

function buildResourceInventory(endpointInventory) {
  const resources = endpointInventory.endpoints.map(endpoint => ({
    method: endpoint.method,
    url: endpoint.url,
    path: new URL(endpoint.url).pathname
  }));

  return new ResourceInventory(resources);
}

module.exports = { buildResourceInventory };
