class HttpExchange {
  constructor({
    request,
    response
  }) {
    this.request = request;
    this.response = response;

    Object.freeze(this);
  }
}

module.exports = { HttpExchange };
