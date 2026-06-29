class Target {
  constructor({
    type,
    identifier,
    authorized = true
  }) {
    this.type = type;
    this.identifier = identifier;
    this.authorized = authorized;

    Object.freeze(this);
  }
}

module.exports = { Target };
