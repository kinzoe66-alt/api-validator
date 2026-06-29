const {
  SessionContext
} = require("./sessionContext");

async function buildSessionContext(runtime) {
  const cookies =
    await runtime.page.context().cookies();

  return new SessionContext({
    browser: runtime.browser,
    page: runtime.page,
    cookies
  });
}

module.exports = {
  buildSessionContext
};
