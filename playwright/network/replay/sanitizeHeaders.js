function sanitizeHeaders(headers = {}) {
  const blocked = new Set([
    "host",
    "content-length",
    "connection",
    "accept-encoding"
  ]);

  const sanitized = {};

  for (const [key, value] of Object.entries(headers)) {
    if (!blocked.has(key.toLowerCase())) {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

module.exports = { sanitizeHeaders };
