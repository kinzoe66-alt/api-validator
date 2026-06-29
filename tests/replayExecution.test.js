const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const {
  replayRequest
} = require("../playwright/network/execution/replayRequest");

(async () => {
  const runtime = await createBrowser();

  await runtime.page.goto("https://example.com");

  const result =
    await replayRequest(runtime.page, {
      method: "GET",
      url: "https://example.com",
      headers: {}
    });

  if (result.status !== 200) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("REPLAY EXECUTION VERIFIED");
})();
