const catalog = [
  {
    name: "resource-access",
    match: /^\/api\//,
    contract:
      "contracts/api/resource-access.contract.yaml"
  }
];

function selectContract(path) {
  for (const entry of catalog) {
    if (entry.match.test(path)) {
      return entry.contract;
    }
  }

  return null;
}

module.exports = {
  catalog,
  selectContract
};
