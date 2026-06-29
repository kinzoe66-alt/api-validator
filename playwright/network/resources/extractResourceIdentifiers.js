function extractResourceIdentifiers(endpoints) {
  const resources = [];

  for (const endpoint of endpoints) {
    const path = new URL(endpoint.url).pathname;

    const segments = path
      .split("/")
      .filter(Boolean);

    const identifiers = segments.filter(segment =>
      /^[0-9a-fA-F-]{6,}$/.test(segment) ||
      /^[0-9]+$/.test(segment)
    );

    resources.push({
      method: endpoint.method,
      path,
      segments,
      identifiers
    });
  }

  return Object.freeze(resources);
}

module.exports = { extractResourceIdentifiers };
