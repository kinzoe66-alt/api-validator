function classifyResources(resourceInventory) {
  return resourceInventory.resources.map(resource => ({
    ...resource,
    segments: resource.path
      .split("/")
      .filter(Boolean)
  }));
}

module.exports = { classifyResources };
