class EndpointInventory {
  constructor(endpoints) {
    this.endpoints = Object.freeze(endpoints);
    Object.freeze(this);
  }
}

function discoverEndpoints(session) {
  return new EndpointInventory([]);
}

module.exports = {
  EndpointInventory,
  discoverEndpoints
};
