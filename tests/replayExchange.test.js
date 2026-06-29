const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const {
  replayExchange
} = require("../playwright/network/execution/replayExchange");

(async () => {
  const runtime = await createBrowser();

  await runtime.page.goto("https://example.com");

  const response =
    await replayExchange(runtime.page, {
      method: "GET",
      url: "https://example.com",
      headers: {},
      body: null
    });

  if (response.status !== 200) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("REPLAY EXCHANGE VERIFIED");
})();
