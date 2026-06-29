const {
  createBrowser
} = require("../playwright/runtime/browserRuntime");

const {
  buildSessionContext
} = require("../runtime/session/buildSessionContext");

(async () => {
  const runtime =
    await createBrowser();

  await runtime.page.goto("https://example.com");

  const session =
    await buildSessionContext(runtime);

  await runtime.browser.close();

  if (
    !session.browser ||
    !session.page ||
    !Array.isArray(session.cookies)
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log("SESSION CONTEXT BUILDER VERIFIED");
})();
