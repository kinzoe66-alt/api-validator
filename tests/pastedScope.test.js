const { loadPastedScope } =
require("../scope/loaders/loadPastedScope");

const targets = loadPastedScope(`
www.soundon.global
tiktok.com
shop.tiktok.com
*.tiktokcdn.com
com.zhiliaoapp.musically
835599320
`);

if (
  targets.length !== 6 ||
  targets[0].type !== "domain" ||
  targets[3].type !== "wildcard" ||
  targets[4].type !== "android" ||
  targets[5].type !== "ios"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASTED SCOPE VERIFIED");
