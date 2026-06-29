async function login(runtime, configuration, identity) {
  const page = runtime.page;

  await page.goto(
    configuration.configuration.base_url +
    configuration.configuration.login.url
  );

  return page;
}

module.exports = { login };
