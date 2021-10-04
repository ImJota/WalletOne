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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletDialog = void 0;
const core_1 = require("@material-ui/core");
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const ExpandLess_1 = __importDefault(require("@material-ui/icons/ExpandLess"));
const ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_1 = __importStar(require("react"));
const useWalletDialog_1 = require("./useWalletDialog");
const WalletListItem_1 = require("./WalletListItem");
const useStyles = (0, core_1.makeStyles)((theme) => ({
    root: {
        '& .MuiDialog-paper': {
            width: theme.spacing(40),
            margin: 0,
        },
        '& .MuiDialogTitle-root': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiTypography-root': {
                display: 'flex',
                justifyContent: 'space-between',
                lineHeight: theme.spacing(5) + 'px',
            },
            '& .MuiIconButton-root': {
                flexShrink: 1,
                padding: theme.spacing(),
                marginRight: theme.spacing(-1),
                color: theme.palette.grey[500],
            },
        },
        '& .MuiDialogContent-root': {
            padding: 0,
            '& .MuiCollapse-root': {
                '& .MuiList-root': {
                    background: theme.palette.grey[900],
                },
            },
            '& .MuiList-root': {
                background: theme.palette.grey[900],
                padding: 0,
            },
            '& .MuiListItem-root': {
                boxShadow: 'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                    boxShadow: 'inset 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.1)' + ', 0 1px 0 0 ' + 'rgba(255, 255, 255, 0.05)',
                },
                padding: 0,
                '& .MuiButton-endIcon': {
                    margin: 0,
                },
                '& .MuiButton-root': {
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    padding: theme.spacing(1, 3),
                    borderRadius: undefined,
                    fontSize: '1rem',
                    fontWeight: 400,
                },
                '& .MuiSvgIcon-root': {
                    color: theme.palette.grey[500],
                },
            },
        },
    },
}));
const WalletDialog = (_a) => {
    var { title = 'Select your wallet', featuredWallets = 3, onClose } = _a, props = __rest(_a, ["title", "featuredWallets", "onClose"]);
    const styles = useStyles();
    const { wallets, select } = (0, wallet_adapter_react_1.useWallet)();
    const { open, setOpen } = (0, useWalletDialog_1.useWalletDialog)();
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const [featured, more] = (0, react_1.useMemo)(() => [wallets.slice(0, featuredWallets), wallets.slice(featuredWallets)], [wallets, featuredWallets]);
    const handleClose = (0, react_1.useCallback)((event, reason) => {
        if (onClose)
            onClose(event, reason);
        if (!event.defaultPrevented)
            setOpen(false);
    }, [setOpen, onClose]);
    const handleWalletClick = (0, react_1.useCallback)((event, walletName) => {
        select(walletName);
        handleClose(event);
    }, [select, handleClose]);
    const handleExpandClick = (0, react_1.useCallback)(() => setExpanded(!expanded), [setExpanded, expanded]);
    return (react_1.default.createElement(core_1.Dialog, Object.assign({ open: open, onClose: handleClose, className: styles.root }, props),
        react_1.default.createElement(core_1.DialogTitle, null,
            title,
            react_1.default.createElement(core_1.IconButton, { onClick: handleClose },
                react_1.default.createElement(Close_1.default, null))),
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.List, null,
                featured.map((wallet) => (react_1.default.createElement(WalletListItem_1.WalletListItem, { key: wallet.name, onClick: (event) => handleWalletClick(event, wallet.name), wallet: wallet }))),
                more.length ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(core_1.Collapse, { in: expanded, timeout: "auto", unmountOnExit: true },
                        react_1.default.createElement(core_1.List, null, more.map((wallet) => (react_1.default.createElement(WalletListItem_1.WalletListItem, { key: wallet.name, onClick: (event) => handleWalletClick(event, wallet.name), wallet: wallet }))))),
                    react_1.default.createElement(core_1.ListItem, null,
                        react_1.default.createElement(core_1.Button, { onClick: handleExpandClick },
                            expanded ? 'Less' : 'More',
                            " options",
                            expanded ? react_1.default.createElement(ExpandLess_1.default, null) : react_1.default.createElement(ExpandMore_1.default, null))))) : null))));
};
exports.WalletDialog = WalletDialog;
//# sourceMappingURL=WalletDialog.js.map