const { buildSession } = require("../authentication/session/buildSession");

const session = buildSession({
  identity: "user_a",
  cookies: [
    {
      name: "session",
      value: "abc123"
    }
  ],
  headers: {
    authorization: "Bearer token"
  }
});

if (
  session.identity !== "user_a" ||
  session.cookies.length !== 1
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("SESSION MODEL VERIFIED");
