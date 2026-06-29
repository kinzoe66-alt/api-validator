const { Session } = require("./session");

function buildSession(data) {
  return new Session(data);
}

module.exports = { buildSession };
