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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletConnectWalletAdapter = exports.WalletConnectRPCMethod = exports.WalletConnectChainID = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
const client_1 = __importStar(require("@walletconnect/client"));
const qrcode_modal_1 = __importDefault(require("@walletconnect/qrcode-modal"));
var WalletConnectChainID;
(function (WalletConnectChainID) {
    WalletConnectChainID["Mainnet"] = "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ";
    WalletConnectChainID["Devnet"] = "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K";
})(WalletConnectChainID = exports.WalletConnectChainID || (exports.WalletConnectChainID = {}));
var WalletConnectRPCMethod;
(function (WalletConnectRPCMethod) {
    WalletConnectRPCMethod["SOL_SIGN_TRANSACTION"] = "sol_signTransaction";
})(WalletConnectRPCMethod = exports.WalletConnectRPCMethod || (exports.WalletConnectRPCMethod = {}));
class WalletConnectWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
    constructor(config) {
        super();
        this._disconnected = () => {
            const client = this._client;
            if (client) {
                client.off(client_1.CLIENT_EVENTS.session.deleted, this._disconnected);
                this._publicKey = null;
                this._client = undefined;
                this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
                this.emit('disconnect');
            }
        };
        this._publicKey = null;
        this._connecting = false;
        this._options = config.options;
        this._params = config.params || {
            permissions: {
                blockchain: { chains: [WalletConnectChainID.Mainnet, WalletConnectChainID.Devnet] },
                jsonrpc: { methods: [WalletConnectRPCMethod.SOL_SIGN_TRANSACTION] },
            },
        };
    }
    get publicKey() {
        return this._publicKey;
    }
    get ready() {
        return typeof window !== 'undefined';
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return !!this._publicKey;
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
                let client;
                let session;
                try {
                    client = yield client_1.default.init(this._options);
                    // eslint-disable-next-line no-async-promise-executor
                    session = yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                        let session;
                        function onPairingProposal(proposal) {
                            return __awaiter(this, void 0, void 0, function* () {
                                const { uri } = proposal.signal.params;
                                qrcode_modal_1.default.open(uri, () => {
                                    cleanup();
                                    reject(new wallet_adapter_base_1.WalletWindowClosedError());
                                });
                            });
                        }
                        function onPairingCreated(created) {
                            return __awaiter(this, void 0, void 0, function* () {
                                cleanup();
                                resolve(session);
                            });
                        }
                        function cleanup() {
                            client.off(client_1.CLIENT_EVENTS.pairing.proposal, onPairingProposal);
                            client.off(client_1.CLIENT_EVENTS.pairing.created, onPairingCreated);
                        }
                        try {
                            client.on(client_1.CLIENT_EVENTS.pairing.proposal, onPairingProposal);
                            client.on(client_1.CLIENT_EVENTS.pairing.created, onPairingCreated);
                            session = yield client.connect(this._params);
                        }
                        catch (error) {
                            cleanup();
                            reject(error);
                        }
                    }));
                }
                catch (error) {
                    if (error instanceof wallet_adapter_base_1.WalletError)
                        throw error;
                    throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                if (!session.state.accounts.length)
                    throw new wallet_adapter_base_1.WalletAccountError();
                const match = session.state.accounts[0].match(/:([0-9a-zA-Z]+)$/);
                if (!match)
                    throw new wallet_adapter_base_1.WalletAccountError();
                const account = match[1];
                let publicKey;
                try {
                    publicKey = new web3_js_1.PublicKey(account);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                client.on(client_1.CLIENT_EVENTS.session.deleted, this._disconnected);
                this._publicKey = publicKey;
                this._client = client;
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
            const client = this._client;
            if (client) {
                this._publicKey = null;
                this._client = undefined;
                try {
                    // @FIXME
                    yield client.disconnect({
                        topic: '',
                        reason: { code: 0, message: '' },
                    });
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
                const client = this._client;
                const publicKey = this._publicKey;
                if (!client || !publicKey)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const signature = yield client.request({
                        topic: '',
                        request: {
                            method: WalletConnectRPCMethod.SOL_SIGN_TRANSACTION,
                            params: transaction,
                        },
                    });
                    transaction.addSignature(publicKey, signature);
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
                const client = this._client;
                const publicKey = this._publicKey;
                if (!client || !publicKey)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    for (const transaction of transactions) {
                        const signature = yield client.request({
                            topic: '',
                            request: {
                                method: WalletConnectRPCMethod.SOL_SIGN_TRANSACTION,
                                params: transaction,
                            },
                        });
                        transaction.addSignature(publicKey, signature);
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
exports.WalletConnectWalletAdapter = WalletConnectWalletAdapter;
//# sourceMappingURL=adapter.js.map