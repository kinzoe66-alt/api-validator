const {
  executeMutation
} = require("../runtime/mutations/executeMutation");

(async () => {
  const observed =
    await executeMutation(
      {
        async execute() {
          return {
            data: {
              request_completed: true
            }
          };
        }
      },
      null,
      {},
      {}
    );

  if (
    observed.data.request_completed !== true
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log(
    "MUTATION EXECUTOR VERIFIED"
  );
})();
