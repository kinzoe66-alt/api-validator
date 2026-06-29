class Session {
  constructor({
    identity,
    cookies,
    headers
  }) {
    this.identity = identity;
    this.cookies = cookies;
    this.headers = headers;

    Object.freeze(this);
  }
}

module.exports = { Session };
