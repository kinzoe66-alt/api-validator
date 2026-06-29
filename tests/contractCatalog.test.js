const {
  selectContract
} = require("../contracts/catalog/contractCatalog");

const contract =
  selectContract("/api/users/123");

if (
  contract !==
  "contracts/api/resource-access.contract.yaml"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("CONTRACT CATALOG VERIFIED");
