"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTorusWallet = exports.getSolongWallet = exports.getSolletExtensionWallet = exports.getSolletWallet = exports.getSolflareWebWallet = exports.getSolflareWallet = exports.getSlopeWallet = exports.getSafePalWallet = exports.getPhantomWallet = exports.getMathWallet = exports.getLedgerWallet = exports.getCoin98Wallet = exports.getCloverWallet = exports.getBloctoWallet = exports.getBitpieWallet = exports.ICONS_URL = exports.WalletName = void 0;
const wallet_adapter_bitpie_1 = require("@solana/wallet-adapter-bitpie");
const wallet_adapter_blocto_1 = require("@solana/wallet-adapter-blocto");
const wallet_adapter_coin98_1 = require("@solana/wallet-adapter-coin98");
const wallet_adapter_ledger_1 = require("@solana/wallet-adapter-ledger");
const wallet_adapter_mathwallet_1 = require("@solana/wallet-adapter-mathwallet");
const wallet_adapter_phantom_1 = require("@solana/wallet-adapter-phantom");
const wallet_adapter_safepal_1 = require("@solana/wallet-adapter-safepal");
const wallet_adapter_slope_1 = require("@solana/wallet-adapter-slope");
const wallet_adapter_solflare_1 = require("@solana/wallet-adapter-solflare");
const wallet_adapter_sollet_1 = require("@solana/wallet-adapter-sollet");
const wallet_adapter_solong_1 = require("@solana/wallet-adapter-solong");
const wallet_adapter_torus_1 = require("@solana/wallet-adapter-torus");
const wallet_adapter_clover_1 = require("@solana/wallet-adapter-clover");
var WalletName;
(function (WalletName) {
    WalletName["Bitpie"] = "Bitpie";
    WalletName["Blocto"] = "Blocto";
    WalletName["Clover"] = "Clover";
    WalletName["Coin98"] = "Coin98";
    WalletName["Ledger"] = "Ledger";
    WalletName["MathWallet"] = "MathWallet";
    WalletName["Phantom"] = "Phantom";
    WalletName["SafePal"] = "SafePal";
    WalletName["Slope"] = "Slope";
    WalletName["Solflare"] = "Solflare";
    WalletName["SolflareWeb"] = "Solflare (Web)";
    WalletName["Sollet"] = "Sollet";
    WalletName["SolletExtension"] = "Sollet (Extension)";
    WalletName["Solong"] = "Solong";
    WalletName["Torus"] = "Torus";
})(WalletName = exports.WalletName || (exports.WalletName = {}));
exports.ICONS_URL = 'https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons';
const getBitpieWallet = (config = {}) => ({
    name: WalletName.Bitpie,
    url: 'https://bitpiecn.com',
    icon: `${exports.ICONS_URL}/bitpie.svg`,
    adapter: () => new wallet_adapter_bitpie_1.BitpieWalletAdapter(config),
});
exports.getBitpieWallet = getBitpieWallet;
const getBloctoWallet = (config = {}) => ({
    name: WalletName.Blocto,
    url: 'https://wallet.blocto.app',
    icon: `${exports.ICONS_URL}/blocto.svg`,
    adapter: () => new wallet_adapter_blocto_1.BloctoWalletAdapter(config),
});
exports.getBloctoWallet = getBloctoWallet;
const getCloverWallet = (config = {}) => ({
    name: WalletName.Clover,
    url: 'https://clover.finance',
    icon: `${exports.ICONS_URL}/clover.svg`,
    adapter: () => new wallet_adapter_clover_1.CloverWalletWalletAdapter(config),
});
exports.getCloverWallet = getCloverWallet;
const getCoin98Wallet = (config = {}) => ({
    name: WalletName.Coin98,
    url: 'https://coin98.com',
    icon: `${exports.ICONS_URL}/coin98.svg`,
    adapter: () => new wallet_adapter_coin98_1.Coin98WalletAdapter(config),
});
exports.getCoin98Wallet = getCoin98Wallet;
const getLedgerWallet = (config = {}) => ({
    name: WalletName.Ledger,
    url: 'https://www.ledger.com',
    icon: `${exports.ICONS_URL}/ledger.svg`,
    adapter: () => new wallet_adapter_ledger_1.LedgerWalletAdapter(config),
});
exports.getLedgerWallet = getLedgerWallet;
const getMathWallet = (config = {}) => ({
    name: WalletName.MathWallet,
    url: 'https://mathwallet.org',
    icon: `${exports.ICONS_URL}/mathwallet.svg`,
    adapter: () => new wallet_adapter_mathwallet_1.MathWalletWalletAdapter(config),
});
exports.getMathWallet = getMathWallet;
const getPhantomWallet = (config = {}) => ({
    name: WalletName.Phantom,
    url: 'https://www.phantom.app',
    icon: `${exports.ICONS_URL}/phantom.svg`,
    adapter: () => new wallet_adapter_phantom_1.PhantomWalletAdapter(config),
});
exports.getPhantomWallet = getPhantomWallet;
const getSafePalWallet = (config = {}) => ({
    name: WalletName.SafePal,
    url: 'https://www.safepal.io',
    icon: `${exports.ICONS_URL}/safepal.svg`,
    adapter: () => new wallet_adapter_safepal_1.SafePalWalletAdapter(config),
});
exports.getSafePalWallet = getSafePalWallet;
const getSlopeWallet = (config = {}) => ({
    name: WalletName.Slope,
    url: 'https://www.slope.finance/#/wallet',
    icon: `${exports.ICONS_URL}/slope.svg`,
    adapter: () => new wallet_adapter_slope_1.SlopeWalletAdapter(config),
});
exports.getSlopeWallet = getSlopeWallet;
const getSolflareWallet = (config = {}) => ({
    name: WalletName.Solflare,
    url: 'https://solflare.com',
    icon: `${exports.ICONS_URL}/solflare.svg`,
    adapter: () => new wallet_adapter_solflare_1.SolflareWalletAdapter(config),
});
exports.getSolflareWallet = getSolflareWallet;
const getSolflareWebWallet = (_a = {}) => {
    var { provider } = _a, config = __rest(_a, ["provider"]);
    return ({
        name: WalletName.SolflareWeb,
        url: 'https://solflare.com',
        icon: `${exports.ICONS_URL}/solflare.svg`,
        adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(Object.assign({ provider: 'https://solflare.com/access-wallet' }, config)),
    });
};
exports.getSolflareWebWallet = getSolflareWebWallet;
const getSolletWallet = (_a = {}) => {
    var { provider } = _a, config = __rest(_a, ["provider"]);
    return ({
        name: WalletName.Sollet,
        url: 'https://www.sollet.io',
        icon: `${exports.ICONS_URL}/sollet.svg`,
        adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(Object.assign({ provider: 'https://www.sollet.io' }, config)),
    });
};
exports.getSolletWallet = getSolletWallet;
const getSolletExtensionWallet = (_a = {}) => {
    var { provider } = _a, config = __rest(_a, ["provider"]);
    return ({
        name: WalletName.SolletExtension,
        url: 'https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno',
        icon: `${exports.ICONS_URL}/sollet_extension.png`,
        adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(config),
    });
};
exports.getSolletExtensionWallet = getSolletExtensionWallet;
const getSolongWallet = (config = {}) => ({
    name: WalletName.Solong,
    url: 'https://solongwallet.com',
    icon: `${exports.ICONS_URL}/solong.png`,
    adapter: () => new wallet_adapter_solong_1.SolongWalletAdapter(config),
});
exports.getSolongWallet = getSolongWallet;
const getTorusWallet = (config) => ({
    name: WalletName.Torus,
    url: 'https://tor.us',
    icon: `${exports.ICONS_URL}/torus.svg`,
    adapter: () => new wallet_adapter_torus_1.TorusWalletAdapter(config),
});
exports.getTorusWallet = getTorusWallet;
//# sourceMappingURL=wallets.js.map