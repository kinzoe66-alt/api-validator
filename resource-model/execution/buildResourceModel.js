const { ResourceModel } = require("../model/resourceModel");

function buildResourceModel(endpointInventory) {
  return new ResourceModel({
    users: [],
    resources: [],
    endpoints: endpointInventory.endpoints
  });
}

module.exports = { buildResourceModel };
