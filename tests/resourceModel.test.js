const { loadResourceModel } = require("../resource-model/loaders/loadResourceModel");

const model = loadResourceModel(
  "examples/resources/resources.yaml"
);

if (
  model.data.users.length !== 2 ||
  model.data.users[0].resources.length !== 2
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
