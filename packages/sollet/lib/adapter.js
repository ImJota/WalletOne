"use strict";
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
exports.SolletWalletAdapter = void 0;
const sol_wallet_adapter_1 = __importDefault(require("@project-serum/sol-wallet-adapter"));
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
class SolletWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
                this.emit('disconnect');
            }
        };
        this._provider = config.provider || (typeof window === 'undefined' ? undefined : window.sollet);
        this._network = config.network || wallet_adapter_base_1.WalletAdapterNetwork.Mainnet;
        this._connecting = false;
        this._wallet = null;
        if (!this.ready)
            (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        var _a;
        return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
    }
    get ready() {
        var _a;
        return (typeof this._provider === 'string' ||
            (typeof window !== 'undefined' && typeof ((_a = window.sollet) === null || _a === void 0 ? void 0 : _a.postMessage) === 'function'));
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.connected);
    }
    get autoApprove() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                this._connecting = true;
                const provider = this._provider || (typeof window !== 'undefined' && window.sollet);
                if (!provider)
                    throw new wallet_adapter_base_1.WalletNotFoundError();
                let wallet;
                try {
                    wallet = new sol_wallet_adapter_1.default(provider, this._network);
                    // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup or extension is closed or blocked
                    const handleDisconnect = wallet.handleDisconnect;
                    let timeout;
                    let interval;
                    try {
                        yield new Promise((resolve, reject) => {
                            const connect = () => {
                                if (timeout)
                                    clearTimeout(timeout);
                                wallet.off('connect', connect);
                                resolve();
                            };
                            wallet.handleDisconnect = (...args) => {
                                wallet.off('connect', connect);
                                reject(new wallet_adapter_base_1.WalletWindowClosedError());
                                return handleDisconnect.apply(wallet, args);
                            };
                            wallet.on('connect', connect);
                            wallet.connect().catch((reason) => {
                                wallet.off('connect', connect);
                                reject(reason);
                            });
                            if (typeof provider === 'string') {
                                let count = 0;
                                interval = setInterval(() => {
                                    const popup = wallet._popup;
                                    if (popup) {
                                        if (popup.closed)
                                            reject(new wallet_adapter_base_1.WalletWindowClosedError());
                                    }
                                    else {
                                        if (count > 50)
                                            reject(new wallet_adapter_base_1.WalletWindowBlockedError());
                                    }
                                    count++;
                                }, 100);
                            }
                            else {
                                // HACK: sol-wallet-adapter doesn't reject or emit an event if the extension is closed or ignored
                                timeout = setTimeout(() => reject(new wallet_adapter_base_1.WalletTimeoutError()), 10000);
                            }
                        });
                    }
                    finally {
                        wallet.handleDisconnect = handleDisconnect;
                        if (interval)
                            clearInterval(interval);
                    }
                }
                catch (error) {
                    if (error instanceof wallet_adapter_base_1.WalletError)
                        throw error;
                    throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
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
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                // HACK: sol-wallet-adapter doesn't reliably fulfill its promise or emit an event on disconnect
                const handleDisconnect = wallet.handleDisconnect;
                try {
                    yield new Promise((resolve, reject) => {
                        const timeout = setTimeout(() => resolve(), 250);
                        wallet.handleDisconnect = (...args) => {
                            clearTimeout(timeout);
                            resolve();
                            return handleDisconnect.apply(wallet, args);
                        };
                        wallet.disconnect().then(() => {
                            clearTimeout(timeout);
                            resolve();
                        }, (error) => {
                            clearTimeout(timeout);
                            // HACK: sol-wallet-adapter rejects with an error on disconnect
                            if (error.message === 'Wallet disconnected') {
                                resolve();
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                }
                catch (error) {
                    this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
                }
                finally {
                    wallet.handleDisconnect = handleDisconnect;
                }
                this.emit('disconnect');
            }
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
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
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
exports.SolletWalletAdapter = SolletWalletAdapter;
//# sourceMappingURL=adapter.js.map