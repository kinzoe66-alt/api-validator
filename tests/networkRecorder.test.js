const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const {
  attachNetworkRecorder
} = require("../playwright/network/networkRecorder");

(async () => {
  const runtime = await createBrowser();

  const exchanges =
    await attachNetworkRecorder(runtime.page);

  await runtime.page.goto("https://example.com");

  await runtime.page.waitForLoadState("networkidle");

  if (
    exchanges.length === 0 ||
    exchanges[0].request.method !== "GET" ||
    exchanges[0].response.status !== 200
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("HTTP RECORDER VERIFIED");
})();
