const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const {
  discoverSurface
} = require("../playwright/discovery/discoverSurface");

(async () => {
  const runtime = await createBrowser();

  const result =
    await discoverSurface(runtime, {
      target: {
        identifier: "example.com"
      }
    });

  if (
    result.url !== "https://example.com/" ||
    !result.title
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("PLAYWRIGHT DISCOVERY VERIFIED");
})();
