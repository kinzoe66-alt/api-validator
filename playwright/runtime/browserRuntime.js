const { chromium } = require("playwright");

async function createBrowser() {
  const browser = await chromium.launch({
    headless: true
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  return {
    browser,
    context,
    page
  };
}

module.exports = { createBrowser };
