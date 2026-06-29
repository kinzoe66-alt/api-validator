const fs = require("fs");

const {
  normalizeScope
} = require("../scope/parser/normalizeScope");

const lines =
  fs.readFileSync(
    "examples/hackerone/tiktok.scope.txt",
    "utf8"
  ).split(/\r?\n/);

const targets =
  normalizeScope(lines);

if (
  targets.length !== 10 ||
  targets[0].type !== "domain" ||
  targets[6].type !== "wildcard" ||
  targets[8].type !== "android" ||
  targets[9].type !== "ios"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("SCOPE NORMALIZATION VERIFIED");
