const { loadDiscovery } = require("../discovery/loaders/loadDiscovery");

const discovery = loadDiscovery(
  "examples/discovery/discovery.yaml"
);

if (
  discovery.data.base_url !== "https://api.example.com" ||
  discovery.data.endpoints.length !== 4
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
