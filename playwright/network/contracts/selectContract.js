function selectContract(exchange) {
  const path = new URL(exchange.request.url).pathname;

  if (path.startsWith("/api/")) {
    return "contracts/api/resource-access.contract.yaml";
  }

  return null;
}

module.exports = { selectContract };
