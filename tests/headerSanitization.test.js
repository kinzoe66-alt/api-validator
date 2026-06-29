const {
  sanitizeHeaders
} = require("../playwright/network/replay/sanitizeHeaders");

const headers = sanitizeHeaders({
  host: "example.com",
  authorization: "Bearer token",
  "content-length": "100"
});

if (
  headers.host ||
  headers["content-length"] ||
  headers.authorization !== "Bearer token"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("HEADER SANITIZATION VERIFIED");
