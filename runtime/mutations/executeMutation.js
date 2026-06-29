async function executeMutation(
  context,
  scenario,
  exchange,
  mutation
) {
  return scenario.execute(
    context.session.page,
    exchange,
    mutation
  );
}

module.exports = {
  executeMutation
};
