const { createBrowser } =
require("../playwright/runtime/browserRuntime");

(async () => {
  const runtime = await createBrowser();

  await runtime.page.goto("https://example.com");

  const title = await runtime.page.title();

  if (!title) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("PLAYWRIGHT RUNTIME VERIFIED");
})();
