export interface TradingPlatform {
  id: string;
  name: string;
  icon: string;
  getUrl: (address: string) => string;
}

export const tradingPlatforms: TradingPlatform[] = [
  {
    id: "ave",
    name: "Ave",
    icon: "/trade-ave.png",
    getUrl: (address) =>
      `https://t.me/AveSniperBot?start=solana-${address}-ref_phanes`,
  },
  {
    id: "pepe-boost",
    name: "PEPE Boost",
    icon: "/trade-pepe-boost.png",
    getUrl: (address) =>
      `https://t.me/pepeboost_sol_bot?start=ref_0xPhanes_ca_${address}`,
  },
  {
    id: "trojan",
    name: "Trojan",
    icon: "/trade-trojan.png",
    getUrl: (address) =>
      `https://t.me/solana_trojanbot?start=r-evan_zk-${address}`,
  },
  {
    id: "bonk",
    name: "Bonk",
    icon: "/trade-bonk.png",
    getUrl: (address) =>
      `https://t.me/furiosa_bonkbot?start=ref_phanes_ca_${address}`,
  },
  {
    id: "mevx",
    name: "Mevx",
    icon: "/trade-mevx.png",
    getUrl: (address) => `https://t.me/MevxTradingBot?start=${address}-phanes`,
  },
  {
    id: "gmgn",
    name: "GMGN",
    icon: "/trade-gmgn.png",
    getUrl: (address) => `https://t.me/GMGN_sol_bot?start=i_${address}`,
  },
  {
    id: "photon",
    name: "Photon",
    icon: "/trade-photon.png",
    getUrl: (address) =>
      `https://photon-sol.tinyastro.io/en/r/@phanes/${address}`,
  },
  {
    id: "bullx",
    name: "Bullx",
    icon: "/trade-bullx.png",
    getUrl: (address) =>
      `https://bullx.io/terminal?chainId=1399811149&r=QKXBJ87T7E9&address=${address}`,
  },
  {
    id: "banana-gun",
    name: "Banana Gun",
    icon: "/trade-banana-gun.png",
    getUrl: (address) =>
      `https://t.me/BananaGun_bot?start=snp_phanes_${address}`,
  },
  {
    id: "maestro",
    name: "Maestro",
    icon: "/trade-meastro.png",
    getUrl: (address) => `https://t.me/MaestroBuyBot?start=${address}`,
  },
  {
    id: "sol-trading-bot",
    name: "SOL Trading Bot",
    icon: "/trade-sol-trading-bot.png",
    getUrl: (address) => `https://t.me/SolTradingBot?start=${address}`,
  },
];
