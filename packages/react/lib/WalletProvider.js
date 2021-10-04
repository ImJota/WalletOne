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
exports.WalletProvider = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const react_1 = __importStar(require("react"));
const errors_1 = require("./errors");
const useLocalStorage_1 = require("./useLocalStorage");
const useWallet_1 = require("./useWallet");
const initialState = {
    wallet: null,
    adapter: null,
    ready: false,
    publicKey: null,
    connected: false,
    autoApprove: false,
};
const WalletProvider = ({ children, wallets, autoConnect = false, onError = (error) => console.error(error), localStorageKey = 'walletName', }) => {
    const [name, setName] = (0, useLocalStorage_1.useLocalStorage)(localStorageKey, null);
    const [{ wallet, adapter, ready, publicKey, connected, autoApprove }, setState] = (0, react_1.useState)(initialState);
    const [connecting, setConnecting] = (0, react_1.useState)(false);
    const [disconnecting, setDisconnecting] = (0, react_1.useState)(false);
    // Map of wallet names to wallets
    const walletsByName = (0, react_1.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
        walletsByName[wallet.name] = wallet;
        return walletsByName;
    }, {}), [wallets]);
    // When the selected wallet changes, initialize the state
    (0, react_1.useEffect)(() => {
        const wallet = (name && walletsByName[name]) || null;
        const adapter = wallet && wallet.adapter();
        if (adapter) {
            const { ready, publicKey, connected, autoApprove } = adapter;
            setState({ wallet, adapter, connected, publicKey, ready, autoApprove });
        }
        else {
            setState(initialState);
        }
    }, [name, walletsByName, setState]);
    // If autoConnect is enabled, try to connect when the adapter changes and is ready
    (0, react_1.useEffect)(() => {
        if (autoConnect && adapter && ready && !connecting && !connected) {
            (function () {
                return __awaiter(this, void 0, void 0, function* () {
                    setConnecting(true);
                    try {
                        yield adapter.connect();
                    }
                    catch (error) {
                        // Clear the selected wallet
                        setName(null);
                        // Don't throw error, but onError will still be called
                    }
                    finally {
                        setConnecting(false);
                    }
                });
            })();
        }
    }, [autoConnect, adapter, ready, connecting, connected, setConnecting, setName]);
    // Select a wallet by name
    const select = (0, react_1.useCallback)((newName) => __awaiter(void 0, void 0, void 0, function* () {
        if (name === newName)
            return;
        if (adapter)
            yield adapter.disconnect();
        setName(newName);
    }), [name, adapter, setName]);
    // Handle the adapter's ready event
    const onReady = (0, react_1.useCallback)(() => setState((state) => (Object.assign(Object.assign({}, state), { ready: true }))), [setState]);
    // Handle the adapter's connect event
    const onConnect = (0, react_1.useCallback)(() => {
        if (!adapter)
            return;
        const { connected, publicKey, ready, autoApprove } = adapter;
        setState((state) => (Object.assign(Object.assign({}, state), { connected,
            publicKey,
            ready,
            autoApprove })));
    }, [adapter, setState]);
    // Handle the adapter's disconnect event
    const onDisconnect = (0, react_1.useCallback)(() => setName(null), [setName]);
    // Connect the adapter to the wallet
    const connect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (connecting || disconnecting || connected)
            return;
        if (!wallet || !adapter) {
            const error = new errors_1.WalletNotSelectedError();
            onError(error);
            throw error;
        }
        if (!ready) {
            setName(null);
            if (typeof window !== 'undefined') {
                window.open(wallet.url, '_blank');
            }
            const error = new wallet_adapter_base_1.WalletNotReadyError();
            onError(error);
            throw error;
        }
        setConnecting(true);
        try {
            yield adapter.connect();
        }
        catch (error) {
            setName(null);
            throw error;
        }
        finally {
            setConnecting(false);
        }
    }), [connecting, disconnecting, connected, wallet, adapter, onError, ready, setName, setConnecting]);
    // Disconnect the adapter from the wallet
    const disconnect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (disconnecting)
            return;
        if (!adapter)
            return setName(null);
        setDisconnecting(true);
        try {
            yield adapter.disconnect();
        }
        finally {
            setName(null);
            setDisconnecting(false);
        }
    }), [disconnecting, adapter, setName, setDisconnecting]);
    // Send a transaction using the provided connection
    const sendTransaction = (0, react_1.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
        if (!adapter) {
            const error = new errors_1.WalletNotSelectedError();
            onError(error);
            throw error;
        }
        if (!connected) {
            const error = new wallet_adapter_base_1.WalletNotConnectedError();
            onError(error);
            throw error;
        }
        return yield adapter.sendTransaction(transaction, connection, options);
    }), [adapter, onError, connected]);
    // Sign a transaction if the wallet supports it
    const signTransaction = (0, react_1.useMemo)(() => adapter && 'signTransaction' in adapter
        ? (transaction) => __awaiter(void 0, void 0, void 0, function* () {
            if (!connected) {
                const error = new wallet_adapter_base_1.WalletNotConnectedError();
                onError(error);
                throw error;
            }
            return yield adapter.signTransaction(transaction);
        })
        : undefined, [adapter, onError, connected]);
    // Sign multiple transactions if the wallet supports it
    const signAllTransactions = (0, react_1.useMemo)(() => adapter && 'signAllTransactions' in adapter
        ? (transactions) => __awaiter(void 0, void 0, void 0, function* () {
            if (!connected) {
                const error = new wallet_adapter_base_1.WalletNotConnectedError();
                onError(error);
                throw error;
            }
            return yield adapter.signAllTransactions(transactions);
        })
        : undefined, [adapter, onError, connected]);
    // Sign an arbitrary message if the wallet supports it
    const signMessage = (0, react_1.useMemo)(() => adapter && 'signMessage' in adapter
        ? (message) => __awaiter(void 0, void 0, void 0, function* () {
            if (!connected) {
                const error = new wallet_adapter_base_1.WalletNotConnectedError();
                onError(error);
                throw error;
            }
            return yield adapter.signMessage(message);
        })
        : undefined, [adapter, onError, connected]);
    // Setup and teardown event listeners when the adapter changes
    (0, react_1.useEffect)(() => {
        if (adapter) {
            adapter.on('ready', onReady);
            adapter.on('connect', onConnect);
            adapter.on('disconnect', onDisconnect);
            adapter.on('error', onError);
            return () => {
                adapter.off('ready', onReady);
                adapter.off('connect', onConnect);
                adapter.off('disconnect', onDisconnect);
                adapter.off('error', onError);
            };
        }
    }, [adapter, onReady, onConnect, onDisconnect, onError]);
    return (react_1.default.createElement(useWallet_1.WalletContext.Provider, { value: {
            wallets,
            autoConnect,
            select,
            wallet,
            adapter,
            publicKey,
            ready,
            connecting,
            disconnecting,
            connected,
            autoApprove,
            connect,
            disconnect,
            sendTransaction,
            signTransaction,
            signAllTransactions,
            signMessage,
        } }, children));
};
exports.WalletProvider = WalletProvider;
//# sourceMappingURL=WalletProvider.js.map