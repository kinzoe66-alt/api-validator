const { Target } = require("../model/target");

function normalizeScope(lines) {
  const targets = [];

  for (const line of lines) {
    const value = line.trim();

    if (!value) {
      continue;
    }

    if (value.startsWith("*.")) {
      targets.push(
        new Target({
          type: "wildcard",
          identifier: value
        })
      );
      continue;
    }

    if (value.startsWith("com.")) {
      targets.push(
        new Target({
          type: "android",
          identifier: value
        })
      );
      continue;
    }

    if (/^[0-9]+$/.test(value)) {
      targets.push(
        new Target({
          type: "ios",
          identifier: value
        })
      );
      continue;
    }

    if (value.includes(".")) {
      targets.push(
        new Target({
          type: "domain",
          identifier: value
        })
      );
    }
  }

  return targets;
}

module.exports = { normalizeScope };
