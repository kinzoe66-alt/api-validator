class SessionContext {
  constructor({
    browser,
    page,
    cookies = [],
    storageState = null
  }) {
    this.browser = browser;
    this.page = page;
    this.cookies = Object.freeze(cookies);
    this.storageState = storageState;

    Object.freeze(this);
  }
}

module.exports = { SessionContext };
