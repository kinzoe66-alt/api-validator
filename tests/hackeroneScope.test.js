const { loadPastedScope } =
require("../scope/loaders/loadPastedScope");

const pasted = `
www.soundon.global
www.pangleglobal.com
tiktok.com
shop.tiktok.com
shop-id.tokopedia.com
seller-id.tokopedia.com
pay.tokopediax.com
partner.tiktokshop.com
live-backstage.tiktok.com
fp-sg.tiktokv.com
effecthouse.tiktok.com
developers.tiktok.com
creatormarketplace.tiktok.com
careers.tiktok.com
business.tiktok.com
affiliate-id.tokopedia.com
ads.tiktok.com
academy-outbound-ads.tiktok.com
*.tiktokv.com
*.tiktokpublishers.com
*.tiktokcdn.com
*.soundon.global
*.pipopay.com
com.zhiliaoapp.musically
com.zhiliao.musically.livewallpaper
com.tiktokshop.seller
com.tiktok.tv
com.ss.android.ugc.trill
com.ss.android.ugc.now
835599320
641062073
1591003012
1235601864
`;

const targets = loadPastedScope(pasted);

const domains =
  targets.filter(t => t.type === "domain").length;

const wildcards =
  targets.filter(t => t.type === "wildcard").length;

const android =
  targets.filter(t => t.type === "android").length;

const ios =
  targets.filter(t => t.type === "ios").length;

if (
  domains !== 18 ||
  wildcards !== 5 ||
  android !== 6 ||
  ios !== 4
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("HACKERONE SCOPE VERIFIED");
