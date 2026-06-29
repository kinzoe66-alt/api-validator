async function discoverSurface(runtime, planStep) {
  const page = runtime.page;

  await page.goto(
    `https://${planStep.target.identifier}`
  );

  return {
    target: planStep.target,
    url: page.url(),
    title: await page.title()
  };
}

module.exports = { discoverSurface };
