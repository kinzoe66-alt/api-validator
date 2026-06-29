const { buildObservedReality } =
require("../../observations/builders/buildObservedReality");

async function buildObservation(page) {
  const observation = {
    url: page.url(),
    title: await page.title(),
    authenticated: true
  };

  return buildObservedReality(observation);
}

module.exports = { buildObservation };
