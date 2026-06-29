const { selectContract } =
require("../contracts/selectContract");

const { loadEvaluationContract } =
require("../../../kernel/loaders/yaml/loadEvaluationContract");

const { buildReplayObservation } =
require("../observations/buildReplayObservation");

const { evaluateReplay } =
require("../evaluation/evaluateReplay");

function evaluateExchange(exchange) {
  const contractPath =
    selectContract(exchange);

  const contract =
    loadEvaluationContract(contractPath);

  const observed =
    buildReplayObservation({
      replay: {
        method: exchange.request.method,
        url: exchange.request.url
      },
      response: {
        status: exchange.response.status
      }
    });

  return evaluateReplay({
    observedReality: observed,
    contract
  });
}

module.exports = { evaluateExchange };
