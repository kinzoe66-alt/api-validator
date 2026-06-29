const { buildObservedReality } = require("../observations/builders/buildObservedReality");

const observed = buildObservedReality({
  authenticated: true,
  foreign_object_requested: true,
  foreign_object_accessible: false
});

if (
  observed.data.authenticated !== true ||
  observed.data.foreign_object_accessible !== false
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
