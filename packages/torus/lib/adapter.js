"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorusWalletAdapter = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
const openlogin_1 = __importStar(require("@toruslabs/openlogin"));
const openlogin_ed25519_1 = require("@toruslabs/openlogin-ed25519");
class TorusWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
    constructor(config) {
        super();
        this._options = Object.assign({ uxMode: 'popup', network: openlogin_1.OPENLOGIN_NETWORK.MAINNET }, config.options);
        this._connecting = false;
        this._openLogin = null;
        this._keypair = null;
    }
    get publicKey() {
        var _a;
        return ((_a = this._keypair) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
    }
    get ready() {
        return typeof window !== 'undefined';
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return !!this._keypair;
    }
    get autoApprove() {
        return false;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                this._connecting = true;
                let openLogin;
                let privateKey;
                try {
                    openLogin = new openlogin_1.default(this._options);
                    yield openLogin.init();
                    privateKey = openLogin.privKey;
                    if (!privateKey) {
                        let listener;
                        try {
                            privateKey = yield new Promise((resolve, reject) => {
                                listener = ({ reason }) => {
                                    switch (reason === null || reason === void 0 ? void 0 : reason.message.toLowerCase()) {
                                        case 'user closed popup':
                                            reason = new wallet_adapter_base_1.WalletWindowClosedError(reason.message, reason);
                                            break;
                                        case 'unable to open window':
                                            reason = new wallet_adapter_base_1.WalletWindowBlockedError(reason.message, reason);
                                            break;
                                    }
                                    reject(reason);
                                };
                                window.addEventListener('unhandledrejection', listener);
                                openLogin.login().then(
                                // HACK: result.privKey is not padded to 64 bytes, use provider.privKey
                                (result) => resolve(openLogin.privKey), (reason) => listener({ reason }));
                            });
                        }
                        finally {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            window.removeEventListener('unhandledrejection', listener);
                        }
                    }
                }
                catch (error) {
                    if (error instanceof wallet_adapter_base_1.WalletError)
                        throw error;
                    throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let keypair;
                try {
                    keypair = web3_js_1.Keypair.fromSecretKey((0, openlogin_ed25519_1.getED25519Key)(privateKey).sk);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletKeypairError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                this._openLogin = openLogin;
                this._keypair = keypair;
                this.emit('connect');
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const openLogin = this._openLogin;
            if (openLogin) {
                this._openLogin = null;
                this._keypair = null;
                try {
                    yield openLogin.logout();
                    yield openLogin._cleanup();
                }
                catch (error) {
                    this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
                }
                this.emit('disconnect');
            }
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const keypair = this._keypair;
                if (!keypair)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    transaction.partialSign(keypair);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                return transaction;
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const keypair = this._keypair;
                if (!keypair)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    for (const transaction of transactions) {
                        transaction.partialSign(keypair);
                    }
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                return transactions;
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
exports.TorusWalletAdapter = TorusWalletAdapter;
//# sourceMappingURL=adapter.js.map