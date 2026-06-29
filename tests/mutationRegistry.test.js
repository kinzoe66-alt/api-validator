const {
  applyStrategy
} = require("../runtime/mutations/registry");

if (
  applyStrategy("increment","1") !== "2" ||
  applyStrategy("decrement","2") !== "1" ||
  applyStrategy("zero","99") !== "0" ||
  applyStrategy("negative","99") !== "-1"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("MUTATION REGISTRY VERIFIED");
