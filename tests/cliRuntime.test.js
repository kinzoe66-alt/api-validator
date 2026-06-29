const { spawnSync } =
require("child_process");

const result =
  spawnSync(
    "node",
    [
      "cli/run.js",
      "https://example.com"
    ],
    {
      encoding: "utf8"
    }
  );

if (result.status !== 0) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "CLI RUNTIME VERIFIED"
);
