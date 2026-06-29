const observe =
require("../scenarios/resource-access/observe");

const observed = observe({
  request: {
    method: "GET",
    url: "https://example.com/api/users/124"
  },
  response: {
    status: 403
  }
});

if (
  observed.data.method !== "GET" ||
  observed.data.status !== 403 ||
  observed.data.authorization_enforced !== true
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "RESOURCE ACCESS OBSERVATION VERIFIED"
);
