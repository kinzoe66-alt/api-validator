const {
  buildDiscoveryObservation
} = require("../discovery/observations/buildDiscoveryObservation");

const observed =
  buildDiscoveryObservation({
    surface: {
      target: {
        identifier: "example.com"
      },
      url: "https://example.com/",
      title: "Example Domain"
    },
    traffic: [
      {
        method: "GET",
        url: "https://example.com/"
      },
      {
        status: 200,
        url: "https://example.com/"
      }
    ]
  });

if (
  observed.data.target !== "example.com" ||
  observed.data.requests !== 1 ||
  observed.data.responses !== 1
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("DISCOVERY OBSERVATION VERIFIED");
