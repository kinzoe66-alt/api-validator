const { buildSession } = require("../session/buildSession");

function authenticate(configuration, identity) {
  return buildSession({
    identity,
    cookies: [],
    headers: {}
  });
}

module.exports = { authenticate };
