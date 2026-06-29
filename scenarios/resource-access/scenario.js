module.exports = {
  id: "resource-access",
  applies: require("./applies"),
  plan: require("./plan"),
  replay: require("./replay"),
  observe: require("./observe"),
  execute: require("./execute"),
  contract: "scenarios/resource-access/contract.yaml"
};
