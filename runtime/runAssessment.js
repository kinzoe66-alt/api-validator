const {
  createBrowser
} = require("../playwright/runtime/browserRuntime");

const {
  attachNetworkRecorder
} = require("../playwright/network/networkRecorder");

const {
  buildExchangeInventory
} = require("../playwright/network/inventory/buildExchangeInventory");

const {
  evaluateCapturedSession
} = require("./orchestrators/evaluateCapturedSession");

async function runAssessment(executor) {
  const runtime =
    await createBrowser();

  const exchanges =
    await attachNetworkRecorder(runtime.page);

  await executor(runtime);

  await runtime.page.waitForLoadState("networkidle");

  const inventory =
    buildExchangeInventory(exchanges);

  const report =
    evaluateCapturedSession(inventory);

  await runtime.browser.close();

  return report;
}

module.exports = { runAssessment };
