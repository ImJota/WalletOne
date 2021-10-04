"use strict";
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1517);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(155);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5102);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5681);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const WalletConnectionProvider = ({
  children
}) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAdapterNetwork.Devnet; // You can also provide a custom RPC endpoint

  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl)(network), [network]); // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application

  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => [(0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getPhantomWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSolflareWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSlopeWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getTorusWallet)({
    options: {
      clientId: 'Get a client ID @ https://developer.tor.us'
    }
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getLedgerWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getBloctoWallet)({
    network
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSolletWallet)({
    network
  }), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSolletExtensionWallet)({
    network
  })], [network]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.ConnectionProvider, {
    endpoint: endpoint,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.WalletProvider, {
      wallets: wallets,
      autoConnect: true,
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnectionProvider);

/***/ }),

/***/ 6897:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletAdapterNetwork = exports.BaseWalletAdapter = exports.EventEmitter = void 0;

const eventemitter3_1 = __importDefault(__webpack_require__(9553));

exports.EventEmitter = eventemitter3_1.default;

class BaseWalletAdapter extends eventemitter3_1.default {}

exports.BaseWalletAdapter = BaseWalletAdapter;
var WalletAdapterNetwork;

(function (WalletAdapterNetwork) {
  WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork["Testnet"] = "testnet";
  WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork = exports.WalletAdapterNetwork || (exports.WalletAdapterNetwork = {}));

/***/ }),

/***/ 1112:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletWindowClosedError = exports.WalletWindowBlockedError = exports.WalletTimeoutError = exports.WalletSignTransactionError = exports.WalletSignMessageError = exports.WalletSendTransactionError = exports.WalletNotConnectedError = exports.WalletKeypairError = exports.WalletPublicKeyError = exports.WalletAccountError = exports.WalletDisconnectionError = exports.WalletDisconnectedError = exports.WalletConnectionError = exports.WalletNotReadyError = exports.WalletNotInstalledError = exports.WalletNotFoundError = exports.WalletError = void 0;

class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}

exports.WalletError = WalletError;

class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}

exports.WalletNotFoundError = WalletNotFoundError;

class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}

exports.WalletNotInstalledError = WalletNotInstalledError;

class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}

exports.WalletNotReadyError = WalletNotReadyError;

class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}

exports.WalletConnectionError = WalletConnectionError;

class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}

exports.WalletDisconnectedError = WalletDisconnectedError;

class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}

exports.WalletDisconnectionError = WalletDisconnectionError;

class WalletAccountError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}

exports.WalletAccountError = WalletAccountError;

class WalletPublicKeyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletPublicKeyError';
  }

}

exports.WalletPublicKeyError = WalletPublicKeyError;

class WalletKeypairError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletKeypairError';
  }

}

exports.WalletKeypairError = WalletKeypairError;

class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}

exports.WalletNotConnectedError = WalletNotConnectedError;

class WalletSendTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSendTransactionError';
  }

}

exports.WalletSendTransactionError = WalletSendTransactionError;

class WalletSignMessageError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignMessageError';
  }

}

exports.WalletSignMessageError = WalletSignMessageError;

class WalletSignTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignTransactionError';
  }

}

exports.WalletSignTransactionError = WalletSignTransactionError;

class WalletTimeoutError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletTimeoutError';
  }

}

exports.WalletTimeoutError = WalletTimeoutError;

class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}

exports.WalletWindowBlockedError = WalletWindowBlockedError;

class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}

exports.WalletWindowClosedError = WalletWindowClosedError;

/***/ }),

/***/ 1517:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(6897), exports);

__exportStar(__webpack_require__(1112), exports);

__exportStar(__webpack_require__(5424), exports);

__exportStar(__webpack_require__(1906), exports);

/***/ }),

/***/ 5424:
/***/ (function(__unused_webpack_module, exports) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pollUntilReady = exports.poll = void 0;

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}

exports.poll = poll;

function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}

exports.pollUntilReady = pollUntilReady;

/***/ }),

/***/ 1906:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseMessageSignerWalletAdapter = exports.BaseSignerWalletAdapter = void 0;

const adapter_1 = __webpack_require__(6897);

const errors_1 = __webpack_require__(1112);

class BaseSignerWalletAdapter extends adapter_1.BaseWalletAdapter {
  sendTransaction(transaction, connection, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);

          const {
            signers
          } = options,
                sendOptions = __rest(options, ["signers"]);

          (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = yield this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return yield connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof errors_1.WalletError) throw error;
          throw new errors_1.WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.BaseSignerWalletAdapter = BaseSignerWalletAdapter;

class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}

exports.BaseMessageSignerWalletAdapter = BaseMessageSignerWalletAdapter;

/***/ }),

/***/ 8141:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BitpieWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

class BitpieWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._wallet;
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        let account;

        try {
          account = yield wallet.getAccount();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.BitpieWalletAdapter = BitpieWalletAdapter;

/***/ }),

/***/ 6065:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(8141), exports);

/***/ }),

/***/ 5993:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BloctoWalletAdapter = void 0;

const sdk_1 = __importDefault(__webpack_require__(2985));

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

class BloctoWalletAdapter extends wallet_adapter_base_1.BaseWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    this._network = config.network || wallet_adapter_base_1.WalletAdapterNetwork.Mainnet;
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return true;
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
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet = new sdk_1.default({
          solana: {
            net: this._network
          }
        }).solana;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();

        if (!wallet.connected) {
          try {
            yield wallet.connect();
          } catch (error) {
            throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          }
        }

        const account = wallet.accounts[0];
        if (!account) throw new wallet_adapter_base_1.WalletAccountError();
        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        this._wallet = null;
        this._publicKey = null;

        try {
          wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  sendTransaction(transaction, connection, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);
          const {
            signers
          } = options;

          if (signers === null || signers === void 0 ? void 0 : signers.length) {
            transaction = yield wallet.convertToProgramWalletTransaction(transaction);
            transaction.partialSign(...signers);
          }

          return yield wallet.signAndSendTransaction(transaction, connection);
        } catch (error) {
          if (error instanceof wallet_adapter_base_1.WalletError) throw error;
          throw new wallet_adapter_base_1.WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.BloctoWalletAdapter = BloctoWalletAdapter;

/***/ }),

/***/ 4940:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(5993), exports);

/***/ }),

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Coin98WalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

const bs58_1 = __importDefault(__webpack_require__(2815));

class Coin98WalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected());
  }

  get autoApprove() {
    return false;
  }

  connect() {
    var _a;

    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && (0);
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isCoin98) throw new wallet_adapter_base_1.WalletNotInstalledError();
        let account;

        try {
          [account] = yield wallet.connect();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        this._wallet.disconnect();

        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const response = yield wallet.request({
            method: 'sol_sign',
            params: [transaction]
          });
          const publicKey = new web3_js_1.PublicKey(response.publicKey);
          const signature = bs58_1.default.decode(response.signature);
          transaction.addSignature(publicKey, signature);
          return transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      const signedTransactions = [];

      for (const transaction of transactions) {
        signedTransactions.push(yield this.signTransaction(transaction));
      }

      return signedTransactions;
    });
  }

}

exports.Coin98WalletAdapter = Coin98WalletAdapter;

/***/ }),

/***/ 1443:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(351), exports);

/***/ }),

/***/ 5509:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LedgerWalletAdapter = void 0;

const hw_transport_webhid_1 = __importDefault(__webpack_require__(6631));

const wallet_adapter_base_1 = __webpack_require__(1517);

const util_1 = __webpack_require__(9029);

class LedgerWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const transport = this._transport;

      if (transport) {
        transport.off('disconnect', this._disconnected);
        this._transport = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._derivationPath = config.derivationPath || (0, util_1.getDerivationPath)(0, 0);
    this._connecting = false;
    this._transport = null;
    this._publicKey = null;
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._transport;
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        let transport;

        try {
          transport = yield hw_transport_webhid_1.default.create();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = yield (0, util_1.getPublicKey)(transport, this._derivationPath);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        transport.on('disconnect', this._disconnected);
        this._transport = transport;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const transport = this._transport;

      if (transport) {
        transport.off('disconnect', this._disconnected);
        this._transport = null;
        this._publicKey = null;

        try {
          yield transport.close();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const transport = this._transport;
        const publicKey = this._publicKey;
        if (!transport || !publicKey) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const signature = yield (0, util_1.signTransaction)(transport, transaction, this._derivationPath);
          transaction.addSignature(publicKey, signature);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transaction;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const transport = this._transport;
        const publicKey = this._publicKey;
        if (!transport || !publicKey) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const derivationPath = this._derivationPath;

          for (const transaction of transactions) {
            const signature = yield (0, util_1.signTransaction)(transport, transaction, derivationPath);
            transaction.addSignature(publicKey, signature);
          }
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transactions;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.LedgerWalletAdapter = LedgerWalletAdapter;

/***/ }),

/***/ 6332:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDerivationPath = void 0;

__exportStar(__webpack_require__(5509), exports);

var util_1 = __webpack_require__(9029);

Object.defineProperty(exports, "getDerivationPath", ({
  enumerable: true,
  get: function () {
    return util_1.getDerivationPath;
  }
}));

/***/ }),

/***/ 9029:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.signTransaction = exports.getPublicKey = exports.getDerivationPath = void 0;

const hw_transport_1 = __webpack_require__(1492);

const web3_js_1 = __webpack_require__(5681);

function getDerivationPath(account, change) {
  const length = account !== undefined ? change === undefined ? 3 : 4 : 2;
  const derivationPath = Buffer.alloc(1 + length * 4);
  let offset = derivationPath.writeUInt8(length, 0);
  offset = derivationPath.writeUInt32BE(harden(44), offset); // Using BIP44

  offset = derivationPath.writeUInt32BE(harden(501), offset); // Solana's BIP44 path

  if (account !== undefined) {
    offset = derivationPath.writeUInt32BE(harden(account), offset);

    if (change !== undefined) {
      derivationPath.writeUInt32BE(harden(change), offset);
    }
  }

  return derivationPath;
}

exports.getDerivationPath = getDerivationPath;
const BIP32_HARDENED_BIT = 1 << 31 >>> 0;

function harden(n) {
  return (n | BIP32_HARDENED_BIT) >>> 0;
}

const INS_GET_PUBKEY = 0x05;
const INS_SIGN_MESSAGE = 0x06;
const P1_NON_CONFIRM = 0x00;
const P1_CONFIRM = 0x01;
const P2_EXTEND = 0x01;
const P2_MORE = 0x02;
const MAX_PAYLOAD = 255;
const LEDGER_CLA = 0xe0;

function getPublicKey(transport, derivationPath) {
  return __awaiter(this, void 0, void 0, function* () {
    const bytes = yield send(transport, INS_GET_PUBKEY, P1_NON_CONFIRM, derivationPath);
    return new web3_js_1.PublicKey(bytes);
  });
}

exports.getPublicKey = getPublicKey;

function signTransaction(transport, transaction, derivationPath) {
  return __awaiter(this, void 0, void 0, function* () {
    const paths = Buffer.alloc(1);
    paths.writeUInt8(1, 0);
    const message = transaction.serializeMessage();
    const data = Buffer.concat([paths, derivationPath, message]);
    return yield send(transport, INS_SIGN_MESSAGE, P1_CONFIRM, data);
  });
}

exports.signTransaction = signTransaction;

function send(transport, instruction, p1, data) {
  return __awaiter(this, void 0, void 0, function* () {
    let p2 = 0;
    let offset = 0;

    if (data.length > MAX_PAYLOAD) {
      while (data.length - offset > MAX_PAYLOAD) {
        const buffer = data.slice(offset, offset + MAX_PAYLOAD);
        const response = yield transport.send(LEDGER_CLA, instruction, p1, p2 | P2_MORE, buffer); // @ts-ignore

        if (response.length !== 2) throw new hw_transport_1.TransportStatusError(hw_transport_1.StatusCodes.INCORRECT_DATA);
        p2 |= P2_EXTEND;
        offset += MAX_PAYLOAD;
      }
    }

    const buffer = data.slice(offset);
    const response = yield transport.send(LEDGER_CLA, instruction, p1, p2, buffer);
    return response.slice(0, response.length - 2);
  });
}

/***/ }),

/***/ 8130:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MathWalletWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

class MathWalletWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._messaged = event => {
      const data = event.data;

      if (data && data.origin === 'mathwallet_internal' && data.type === 'lockStatusChanged' && !data.payload) {
        this._disconnected();
      }
    };

    this._disconnected = () => {
      if (this._wallet) {
        window.removeEventListener('message', this._messaged);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._wallet;
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isMathWallet) throw new wallet_adapter_base_1.WalletNotInstalledError(); // @TODO: handle if popup is blocked

        let account;

        try {
          account = yield wallet.getAccount();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        window.addEventListener('message', this._messaged);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        window.removeEventListener('message', this._messaged);
        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.MathWalletWalletAdapter = MathWalletWalletAdapter;

/***/ }),

/***/ 4824:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(8130), exports);

/***/ }),

/***/ 508:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhantomWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

class PhantomWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isPhantom) throw new wallet_adapter_base_1.WalletNotInstalledError();

        if (!wallet.isConnected) {
          // HACK: Phantom doesn't reject or emit an event if the popup is closed
          const handleDisconnect = wallet._handleDisconnect;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                wallet.off('connect', connect);
                resolve();
              };

              wallet._handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new wallet_adapter_base_1.WalletWindowClosedError());
                return handleDisconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });
            });
          } catch (error) {
            if (error instanceof wallet_adapter_base_1.WalletError) throw error;
            throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          } finally {
            wallet._handleDisconnect = handleDisconnect;
          }
        }

        if (!wallet.publicKey) throw new wallet_adapter_base_1.WalletConnectionError();
        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
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
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const {
            signature
          } = yield wallet.signMessage(message);
          return Uint8Array.from(signature);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.PhantomWalletAdapter = PhantomWalletAdapter;

/***/ }),

/***/ 3704:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(508), exports);

/***/ }),

/***/ 3973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConnectionProvider = void 0;

const web3_js_1 = __webpack_require__(5681);

const react_1 = __importStar(__webpack_require__(9297));

const useConnection_1 = __webpack_require__(1702);

const ConnectionProvider = ({
  children,
  endpoint,
  config = {
    commitment: 'confirmed'
  }
}) => {
  const connection = (0, react_1.useMemo)(() => new web3_js_1.Connection(endpoint, config), [endpoint, config]);
  return react_1.default.createElement(useConnection_1.ConnectionContext.Provider, {
    value: {
      connection
    }
  }, children);
};

exports.ConnectionProvider = ConnectionProvider;

/***/ }),

/***/ 4130:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletProvider = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const react_1 = __importStar(__webpack_require__(9297));

const errors_1 = __webpack_require__(6945);

const useLocalStorage_1 = __webpack_require__(6592);

const useWallet_1 = __webpack_require__(9762);

const initialState = {
  wallet: null,
  adapter: null,
  ready: false,
  publicKey: null,
  connected: false,
  autoApprove: false
};

const WalletProvider = ({
  children,
  wallets,
  autoConnect = false,
  onError = error => console.error(error),
  localStorageKey = 'walletName'
}) => {
  const [name, setName] = (0, useLocalStorage_1.useLocalStorage)(localStorageKey, null);
  const [{
    wallet,
    adapter,
    ready,
    publicKey,
    connected,
    autoApprove
  }, setState] = (0, react_1.useState)(initialState);
  const [connecting, setConnecting] = (0, react_1.useState)(false);
  const [disconnecting, setDisconnecting] = (0, react_1.useState)(false); // Map of wallet names to wallets

  const walletsByName = (0, react_1.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, initialize the state

  (0, react_1.useEffect)(() => {
    const wallet = name && walletsByName[name] || null;
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        publicKey,
        connected,
        autoApprove
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        publicKey,
        ready,
        autoApprove
      });
    } else {
      setState(initialState);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0, react_1.useEffect)(() => {
    if (autoConnect && adapter && ready && !connecting && !connected) {
      (function () {
        return __awaiter(this, void 0, void 0, function* () {
          setConnecting(true);

          try {
            yield adapter.connect();
          } catch (error) {
            // Clear the selected wallet
            setName(null); // Don't throw error, but onError will still be called
          } finally {
            setConnecting(false);
          }
        });
      })();
    }
  }, [autoConnect, adapter, ready, connecting, connected, setConnecting, setName]); // Select a wallet by name

  const select = (0, react_1.useCallback)(newName => __awaiter(void 0, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0, react_1.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0, react_1.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      publicKey,
      ready,
      autoApprove
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      publicKey,
      ready,
      autoApprove
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0, react_1.useCallback)(() => setName(null), [setName]); // Connect the adapter to the wallet

  const connect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (connecting || disconnecting || connected) return;

    if (!wallet || !adapter) {
      const error = new errors_1.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!ready) {
      setName(null);

      if (false) {}

      const error = new wallet_adapter_base_1.WalletNotReadyError();
      onError(error);
      throw error;
    }

    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      setName(null);
      throw error;
    } finally {
      setConnecting(false);
    }
  }), [connecting, disconnecting, connected, wallet, adapter, onError, ready, setName, setConnecting]); // Disconnect the adapter from the wallet

  const disconnect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (disconnecting) return;
    if (!adapter) return setName(null);
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } finally {
      setName(null);
      setDisconnecting(false);
    }
  }), [disconnecting, adapter, setName, setDisconnecting]); // Send a transaction using the provided connection

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
  }), [adapter, onError, connected]); // Sign a transaction if the wallet supports it

  const signTransaction = (0, react_1.useMemo)(() => adapter && 'signTransaction' in adapter ? transaction => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signTransaction(transaction);
  }) : undefined, [adapter, onError, connected]); // Sign multiple transactions if the wallet supports it

  const signAllTransactions = (0, react_1.useMemo)(() => adapter && 'signAllTransactions' in adapter ? transactions => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signAllTransactions(transactions);
  }) : undefined, [adapter, onError, connected]); // Sign an arbitrary message if the wallet supports it

  const signMessage = (0, react_1.useMemo)(() => adapter && 'signMessage' in adapter ? message => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new wallet_adapter_base_1.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signMessage(message);
  }) : undefined, [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

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
  return react_1.default.createElement(useWallet_1.WalletContext.Provider, {
    value: {
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
      signMessage
    }
  }, children);
};

exports.WalletProvider = WalletProvider;

/***/ }),

/***/ 6945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WalletNotSelectedError = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

class WalletNotSelectedError extends wallet_adapter_base_1.WalletError {}

exports.WalletNotSelectedError = WalletNotSelectedError;

/***/ }),

/***/ 155:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(7677), exports);

__exportStar(__webpack_require__(3973), exports);

__exportStar(__webpack_require__(6945), exports);

__exportStar(__webpack_require__(1702), exports);

__exportStar(__webpack_require__(6592), exports);

__exportStar(__webpack_require__(9762), exports);

__exportStar(__webpack_require__(4130), exports);

/***/ }),

/***/ 7677:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAnchorWallet = void 0;

const react_1 = __webpack_require__(9297);

const useWallet_1 = __webpack_require__(9762);

function useAnchorWallet() {
  const {
    publicKey,
    signTransaction,
    signAllTransactions
  } = (0, useWallet_1.useWallet)();
  return (0, react_1.useMemo)(() => publicKey && signTransaction && signAllTransactions ? {
    publicKey,
    signTransaction,
    signAllTransactions
  } : undefined, [publicKey, signTransaction, signAllTransactions]);
}

exports.useAnchorWallet = useAnchorWallet;

/***/ }),

/***/ 1702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useConnection = exports.ConnectionContext = void 0;

const react_1 = __webpack_require__(9297);

exports.ConnectionContext = (0, react_1.createContext)({});

function useConnection() {
  return (0, react_1.useContext)(exports.ConnectionContext);
}

exports.useConnection = useConnection;

/***/ }),

/***/ 6592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLocalStorage = void 0;

const react_1 = __webpack_require__(9297);

function useLocalStorage(key, defaultState) {
  const [value, setValue] = (0, react_1.useState)(() => {
    if (typeof localStorage === 'undefined') return defaultState;
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return defaultState;
  });
  const setLocalStorage = (0, react_1.useCallback)(newValue => {
    if (newValue === value) return;
    setValue(newValue);

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }, [value, setValue, key]);
  return [value, setLocalStorage];
}

exports.useLocalStorage = useLocalStorage;

/***/ }),

/***/ 9762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useWallet = exports.WalletContext = void 0;

const react_1 = __webpack_require__(9297);

exports.WalletContext = (0, react_1.createContext)({});

function useWallet() {
  return (0, react_1.useContext)(exports.WalletContext);
}

exports.useWallet = useWallet;

/***/ }),

/***/ 1345:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SafePalWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

class SafePalWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._wallet;
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet = window.safepal;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isSafePalWallet) throw new wallet_adapter_base_1.WalletNotInstalledError();
        let account;

        try {
          account = yield wallet.getAccount();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return wallet.signTransaction(transaction);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return wallet.signAllTransactions(transactions);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SafePalWalletAdapter = SafePalWalletAdapter;

/***/ }),

/***/ 4432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(1345), exports);

/***/ }),

/***/ 8395:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SlopeWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

const bs58_1 = __importDefault(__webpack_require__(2815));

class SlopeWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
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
        if (this.connected || this.connecting) return;
        this._connecting = true;
        if (!window.Slope) throw new wallet_adapter_base_1.WalletNotFoundError();
        const wallet = new window.Slope();
        let account;

        try {
          const {
            data
          } = yield wallet.connect();
          if (!data.publicKey) throw new wallet_adapter_base_1.WalletConnectionError();
          account = data.publicKey;
        } catch (error) {
          if (error instanceof wallet_adapter_base_1.WalletError) throw error;
          throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        this._wallet = null;
        this._publicKey = null;

        try {
          const {
            msg
          } = yield wallet.disconnect();
          if (msg !== 'ok') throw new wallet_adapter_base_1.WalletDisconnectionError(msg);
        } catch (error) {
          if (!(error instanceof wallet_adapter_base_1.WalletError)) {
            // eslint-disable-next-line no-ex-assign
            error = new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          }

          this.emit('error', error);
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const message = bs58_1.default.encode(transaction.serializeMessage());
          const {
            msg,
            data
          } = yield wallet.signTransaction(message);
          if (!data.publicKey || !data.signature) throw new wallet_adapter_base_1.WalletSignTransactionError(msg);
          const publicKey = new web3_js_1.PublicKey(data.publicKey);
          const signature = bs58_1.default.decode(data.signature);
          transaction.addSignature(publicKey, signature);
          return transaction;
        } catch (error) {
          if (error instanceof wallet_adapter_base_1.WalletError) throw error;
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    var _a;

    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          const messages = transactions.map(transaction => bs58_1.default.encode(transaction.serializeMessage()));
          const {
            msg,
            data
          } = yield wallet.signAllTransactions(messages);
          const length = transactions.length;
          if (!data.publicKey || ((_a = data.signatures) === null || _a === void 0 ? void 0 : _a.length) !== length) throw new wallet_adapter_base_1.WalletSignTransactionError(msg);
          const publicKey = new web3_js_1.PublicKey(data.publicKey);

          for (let i = 0; i < length; i++) {
            transactions[i].addSignature(publicKey, bs58_1.default.decode(data.signatures[i]));
          }

          return transactions;
        } catch (error) {
          if (error instanceof wallet_adapter_base_1.WalletError) throw error;
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SlopeWalletAdapter = SlopeWalletAdapter;

/***/ }),

/***/ 4652:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(8395), exports);

/***/ }),

/***/ 8605:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolflareWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

class SolflareWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  get autoApprove() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.autoApprove);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        if (!wallet.isSolflare) throw new wallet_adapter_base_1.WalletNotInstalledError();

        if (!wallet.isConnected) {
          try {
            yield wallet.connect();
          } catch (error) {
            throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          }
        } // HACK: Solflare doesn't reject its promise if the popup is closed


        if (!wallet.publicKey) throw new wallet_adapter_base_1.WalletConnectionError();
        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
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
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }

        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SolflareWalletAdapter = SolflareWalletAdapter;

/***/ }),

/***/ 9519:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(8605), exports);

/***/ }),

/***/ 4860:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolletWalletAdapter = void 0;

const sol_wallet_adapter_1 = __importDefault(__webpack_require__(9713));

const wallet_adapter_base_1 = __webpack_require__(1517);

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

    this._provider = config.provider || ( true ? undefined : 0);
    this._network = config.network || wallet_adapter_base_1.WalletAdapterNetwork.Mainnet;
    this._connecting = false;
    this._wallet = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    var _a;

    return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
  }

  get ready() {
    var _a;

    return typeof this._provider === 'string' ||  false && 0;
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
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const provider = this._provider ||  false && 0;
        if (!provider) throw new wallet_adapter_base_1.WalletNotFoundError();
        let wallet;

        try {
          wallet = new sol_wallet_adapter_1.default(provider, this._network); // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup or extension is closed or blocked

          const handleDisconnect = wallet.handleDisconnect;
          let timeout;
          let interval;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                if (timeout) clearTimeout(timeout);
                wallet.off('connect', connect);
                resolve();
              };

              wallet.handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new wallet_adapter_base_1.WalletWindowClosedError());
                return handleDisconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });

              if (typeof provider === 'string') {
                let count = 0;
                interval = setInterval(() => {
                  const popup = wallet._popup;

                  if (popup) {
                    if (popup.closed) reject(new wallet_adapter_base_1.WalletWindowClosedError());
                  } else {
                    if (count > 50) reject(new wallet_adapter_base_1.WalletWindowBlockedError());
                  }

                  count++;
                }, 100);
              } else {
                // HACK: sol-wallet-adapter doesn't reject or emit an event if the extension is closed or ignored
                timeout = setTimeout(() => reject(new wallet_adapter_base_1.WalletTimeoutError()), 10000);
              }
            });
          } finally {
            wallet.handleDisconnect = handleDisconnect;
            if (interval) clearInterval(interval);
          }
        } catch (error) {
          if (error instanceof wallet_adapter_base_1.WalletError) throw error;
          throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null; // HACK: sol-wallet-adapter doesn't reliably fulfill its promise or emit an event on disconnect

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
            }, error => {
              clearTimeout(timeout); // HACK: sol-wallet-adapter rejects with an error on disconnect

              if (error.message === 'Wallet disconnected') {
                resolve();
              } else {
                reject(error);
              }
            });
          });
        } catch (error) {
          this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        } finally {
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
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.SolletWalletAdapter = SolletWalletAdapter;

/***/ }),

/***/ 4098:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(4860), exports);

/***/ }),

/***/ 2560:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SolongWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

class SolongWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.currentAccount);
  }

  get autoApprove() {
    return false;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotFoundError();
        let account;

        try {
          account = yield wallet.selectAccount();
        } catch (error) {
          throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let publicKey;

        try {
          publicKey = new web3_js_1.PublicKey(account);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._wallet) {
        this._wallet = null;
        this._publicKey = null;
        this.emit('disconnect');
      }
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      const signedTransactions = [];

      for (const transaction of transactions) {
        signedTransactions.push(yield this.signTransaction(transaction));
      }

      return signedTransactions;
    });
  }

}

exports.SolongWalletAdapter = SolongWalletAdapter;

/***/ }),

/***/ 8887:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(2560), exports);

/***/ }),

/***/ 6543:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TorusWalletAdapter = void 0;

const wallet_adapter_base_1 = __webpack_require__(1517);

const web3_js_1 = __webpack_require__(5681);

const openlogin_1 = __importStar(__webpack_require__(7619));

const openlogin_ed25519_1 = __webpack_require__(9209);

class TorusWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
  constructor(config) {
    super();
    this._options = Object.assign({
      uxMode: 'popup',
      network: openlogin_1.OPENLOGIN_NETWORK.MAINNET
    }, config.options);
    this._connecting = false;
    this._openLogin = null;
    this._keypair = null;
  }

  get publicKey() {
    var _a;

    return ((_a = this._keypair) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
  }

  get ready() {
    return false;
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
        if (this.connected || this.connecting) return;
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
                listener = ({
                  reason
                }) => {
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
                openLogin.login().then( // HACK: result.privKey is not padded to 64 bytes, use provider.privKey
                result => resolve(openLogin.privKey), reason => listener({
                  reason
                }));
              });
            } finally {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              window.removeEventListener('unhandledrejection', listener);
            }
          }
        } catch (error) {
          if (error instanceof wallet_adapter_base_1.WalletError) throw error;
          throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        let keypair;

        try {
          keypair = web3_js_1.Keypair.fromSecretKey((0, openlogin_ed25519_1.getED25519Key)(privateKey).sk);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletKeypairError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        this._openLogin = openLogin;
        this._keypair = keypair;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
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
        } catch (error) {
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
        if (!keypair) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          transaction.partialSign(keypair);
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transaction;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const keypair = this._keypair;
        if (!keypair) throw new wallet_adapter_base_1.WalletNotConnectedError();

        try {
          for (const transaction of transactions) {
            transaction.partialSign(keypair);
          }
        } catch (error) {
          throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        return transactions;
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

exports.TorusWalletAdapter = TorusWalletAdapter;

/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(6543), exports);

/***/ }),

/***/ 5102:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(2803), exports);

/***/ }),

/***/ 2803:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTorusWallet = exports.getSolongWallet = exports.getSolletExtensionWallet = exports.getSolletWallet = exports.getSolflareWebWallet = exports.getSolflareWallet = exports.getSlopeWallet = exports.getSafePalWallet = exports.getPhantomWallet = exports.getMathWallet = exports.getLedgerWallet = exports.getCoin98Wallet = exports.getCloverWallet = exports.getBloctoWallet = exports.getBitpieWallet = exports.ICONS_URL = exports.WalletName = void 0;

const wallet_adapter_bitpie_1 = __webpack_require__(6065);

const wallet_adapter_blocto_1 = __webpack_require__(4940);

const wallet_adapter_coin98_1 = __webpack_require__(1443);

const wallet_adapter_ledger_1 = __webpack_require__(6332);

const wallet_adapter_mathwallet_1 = __webpack_require__(4824);

const wallet_adapter_phantom_1 = __webpack_require__(3704);

const wallet_adapter_safepal_1 = __webpack_require__(4432);

const wallet_adapter_slope_1 = __webpack_require__(4652);

const wallet_adapter_solflare_1 = __webpack_require__(9519);

const wallet_adapter_sollet_1 = __webpack_require__(4098);

const wallet_adapter_solong_1 = __webpack_require__(8887);

const wallet_adapter_torus_1 = __webpack_require__(5296);

const wallet_adapter_clover_1 = __webpack_require__(7938);

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
  adapter: () => new wallet_adapter_bitpie_1.BitpieWalletAdapter(config)
});

exports.getBitpieWallet = getBitpieWallet;

const getBloctoWallet = (config = {}) => ({
  name: WalletName.Blocto,
  url: 'https://wallet.blocto.app',
  icon: `${exports.ICONS_URL}/blocto.svg`,
  adapter: () => new wallet_adapter_blocto_1.BloctoWalletAdapter(config)
});

exports.getBloctoWallet = getBloctoWallet;

const getCloverWallet = (config = {}) => ({
  name: WalletName.Clover,
  url: 'https://clover.finance',
  icon: `${exports.ICONS_URL}/clover.svg`,
  adapter: () => new wallet_adapter_clover_1.CloverWalletWalletAdapter(config)
});

exports.getCloverWallet = getCloverWallet;

const getCoin98Wallet = (config = {}) => ({
  name: WalletName.Coin98,
  url: 'https://coin98.com',
  icon: `${exports.ICONS_URL}/coin98.svg`,
  adapter: () => new wallet_adapter_coin98_1.Coin98WalletAdapter(config)
});

exports.getCoin98Wallet = getCoin98Wallet;

const getLedgerWallet = (config = {}) => ({
  name: WalletName.Ledger,
  url: 'https://www.ledger.com',
  icon: `${exports.ICONS_URL}/ledger.svg`,
  adapter: () => new wallet_adapter_ledger_1.LedgerWalletAdapter(config)
});

exports.getLedgerWallet = getLedgerWallet;

const getMathWallet = (config = {}) => ({
  name: WalletName.MathWallet,
  url: 'https://mathwallet.org',
  icon: `${exports.ICONS_URL}/mathwallet.svg`,
  adapter: () => new wallet_adapter_mathwallet_1.MathWalletWalletAdapter(config)
});

exports.getMathWallet = getMathWallet;

const getPhantomWallet = (config = {}) => ({
  name: WalletName.Phantom,
  url: 'https://www.phantom.app',
  icon: `${exports.ICONS_URL}/phantom.svg`,
  adapter: () => new wallet_adapter_phantom_1.PhantomWalletAdapter(config)
});

exports.getPhantomWallet = getPhantomWallet;

const getSafePalWallet = (config = {}) => ({
  name: WalletName.SafePal,
  url: 'https://www.safepal.io',
  icon: `${exports.ICONS_URL}/safepal.svg`,
  adapter: () => new wallet_adapter_safepal_1.SafePalWalletAdapter(config)
});

exports.getSafePalWallet = getSafePalWallet;

const getSlopeWallet = (config = {}) => ({
  name: WalletName.Slope,
  url: 'https://www.slope.finance/#/wallet',
  icon: `${exports.ICONS_URL}/slope.svg`,
  adapter: () => new wallet_adapter_slope_1.SlopeWalletAdapter(config)
});

exports.getSlopeWallet = getSlopeWallet;

const getSolflareWallet = (config = {}) => ({
  name: WalletName.Solflare,
  url: 'https://solflare.com',
  icon: `${exports.ICONS_URL}/solflare.svg`,
  adapter: () => new wallet_adapter_solflare_1.SolflareWalletAdapter(config)
});

exports.getSolflareWallet = getSolflareWallet;

const getSolflareWebWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: WalletName.SolflareWeb,
    url: 'https://solflare.com',
    icon: `${exports.ICONS_URL}/solflare.svg`,
    adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(Object.assign({
      provider: 'https://solflare.com/access-wallet'
    }, config))
  };
};

exports.getSolflareWebWallet = getSolflareWebWallet;

const getSolletWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: WalletName.Sollet,
    url: 'https://www.sollet.io',
    icon: `${exports.ICONS_URL}/sollet.svg`,
    adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(Object.assign({
      provider: 'https://www.sollet.io'
    }, config))
  };
};

exports.getSolletWallet = getSolletWallet;

const getSolletExtensionWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: WalletName.SolletExtension,
    url: 'https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno',
    icon: `${exports.ICONS_URL}/sollet_extension.png`,
    adapter: () => new wallet_adapter_sollet_1.SolletWalletAdapter(config)
  };
};

exports.getSolletExtensionWallet = getSolletExtensionWallet;

const getSolongWallet = (config = {}) => ({
  name: WalletName.Solong,
  url: 'https://solongwallet.com',
  icon: `${exports.ICONS_URL}/solong.png`,
  adapter: () => new wallet_adapter_solong_1.SolongWalletAdapter(config)
});

exports.getSolongWallet = getSolongWallet;

const getTorusWallet = config => ({
  name: WalletName.Torus,
  url: 'https://tor.us',
  icon: `${exports.ICONS_URL}/torus.svg`,
  adapter: () => new wallet_adapter_torus_1.TorusWalletAdapter(config)
});

exports.getTorusWallet = getTorusWallet;

/***/ }),

/***/ 9004:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloverWalletWalletAdapter = void 0;
const wallet_adapter_base_1 = __webpack_require__(1517);
const web3_js_1 = __webpack_require__(5681);
class CloverWalletWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (!this.ready)
            (0, wallet_adapter_base_1.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        return this._publicKey;
    }
    get ready() {
        var _a;
        return typeof window !== 'undefined' && !!((_a = window.clover_solana) === null || _a === void 0 ? void 0 : _a.isCloverWallet);
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return !!this._wallet;
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
                const wallet = typeof window !== 'undefined' && window.clover_solana;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotFoundError();
                if (!wallet.isCloverWallet)
                    throw new wallet_adapter_base_1.WalletNotInstalledError();
                let account;
                try {
                    account = yield wallet.getAccount();
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let publicKey;
                try {
                    publicKey = new web3_js_1.PublicKey(account);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                this._wallet = wallet;
                this._publicKey = publicKey;
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
            if (this._wallet) {
                this._wallet = null;
                this._publicKey = null;
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
            const signedTransactions = [];
            for (const transaction of transactions) {
                signedTransactions.push(yield this.signTransaction(transaction));
            }
            return signedTransactions;
        });
    }
}
exports.CloverWalletWalletAdapter = CloverWalletWalletAdapter;
//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ 7938:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9004), exports);
//# sourceMappingURL=index.js.map

/***/ })

};
;