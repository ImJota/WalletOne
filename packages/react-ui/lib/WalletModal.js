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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletModal = void 0;
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const Button_1 = require("./Button");
const Collapse_1 = require("./Collapse");
const useWalletModal_1 = require("./useWalletModal");
const WalletListItem_1 = require("./WalletListItem");
const WalletModal = ({ className = '', logo, featuredWallets = 3, container = 'body', }) => {
    const ref = (0, react_1.useRef)(null);
    const { wallets, select } = (0, wallet_adapter_react_1.useWallet)();
    const { setVisible } = (0, useWalletModal_1.useWalletModal)();
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const [fadeIn, setFadeIn] = (0, react_1.useState)(false);
    const [portal, setPortal] = (0, react_1.useState)(null);
    const [featured, more] = (0, react_1.useMemo)(() => [wallets.slice(0, featuredWallets), wallets.slice(featuredWallets)], [wallets, featuredWallets]);
    const hideModal = (0, react_1.useCallback)(() => {
        setFadeIn(false);
        setTimeout(() => setVisible(false), 150);
    }, [setFadeIn, setVisible]);
    const handleClose = (0, react_1.useCallback)((event) => {
        event.preventDefault();
        hideModal();
    }, [hideModal]);
    const handleWalletClick = (0, react_1.useCallback)((event, walletName) => {
        select(walletName);
        handleClose(event);
    }, [select, handleClose]);
    const handleCollapseClick = (0, react_1.useCallback)(() => setExpanded(!expanded), [setExpanded, expanded]);
    const handleTabKey = (0, react_1.useCallback)((event) => {
        const node = ref.current;
        if (!node)
            return;
        // here we query all focusable elements
        const focusableElements = node.querySelectorAll('button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey) {
            // if going backward by pressing tab and firstElement is active, shift focus to last focusable element
            if (document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            }
        }
        else {
            // if going forward by pressing tab and lastElement is active, shift focus to first focusable element
            if (document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
            }
        }
    }, [ref]);
    (0, react_1.useLayoutEffect)(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                hideModal();
            }
            else if (event.key === 'Tab') {
                handleTabKey(event);
            }
        };
        // Get original overflow
        const { overflow } = window.getComputedStyle(document.body);
        // Hack to enable fade in animation after mount
        setTimeout(() => setFadeIn(true), 0);
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Listen for keydown events
        window.addEventListener('keydown', handleKeyDown, false);
        return () => {
            // Re-enable scrolling when component unmounts
            document.body.style.overflow = overflow;
            window.removeEventListener('keydown', handleKeyDown, false);
        };
    }, [hideModal, handleTabKey]);
    (0, react_1.useLayoutEffect)(() => setPortal(document.querySelector(container)), [setPortal, container]);
    return (portal &&
        (0, react_dom_1.createPortal)(react_1.default.createElement("div", { "aria-labelledby": "wallet-adapter-modal-title", "aria-modal": "true", className: `wallet-adapter-modal ${fadeIn && 'wallet-adapter-modal-fade-in'} ${className}`, ref: ref, role: "dialog" },
            react_1.default.createElement("div", { className: "wallet-adapter-modal-container" },
                react_1.default.createElement("div", { className: `wallet-adapter-modal-wrapper ${!logo && 'wallet-adapter-modal-wrapper-no-logo'}` },
                    logo && (react_1.default.createElement("div", { className: "wallet-adapter-modal-logo-wrapper" }, typeof logo === 'string' ? (react_1.default.createElement("img", { alt: "logo", className: "wallet-adapter-modal-logo", src: logo })) : (logo))),
                    react_1.default.createElement("h1", { className: "wallet-adapter-modal-title", id: "wallet-adapter-modal-title" }, "Connect Wallet"),
                    react_1.default.createElement("button", { onClick: handleClose, className: "wallet-adapter-modal-button-close" },
                        react_1.default.createElement("svg", { width: "14", height: "14" },
                            react_1.default.createElement("path", { d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z" }))),
                    react_1.default.createElement("ul", { className: "wallet-adapter-modal-list" }, featured.map((wallet) => (react_1.default.createElement(WalletListItem_1.WalletListItem, { key: wallet.name, handleClick: (event) => handleWalletClick(event, wallet.name), wallet: wallet })))),
                    more.length ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Collapse_1.Collapse, { expanded: expanded, id: "wallet-adapter-modal-collapse" },
                            react_1.default.createElement("ul", { className: "wallet-adapter-modal-list" }, more.map((wallet) => (react_1.default.createElement(WalletListItem_1.WalletListItem, { key: wallet.name, handleClick: (event) => handleWalletClick(event, wallet.name), tabIndex: expanded ? 0 : -1, wallet: wallet }))))),
                        react_1.default.createElement(Button_1.Button, { "aria-controls": "wallet-adapter-modal-collapse", "aria-expanded": expanded, className: `wallet-adapter-modal-collapse-button ${expanded && 'wallet-adapter-modal-collapse-button-active'}`, endIcon: react_1.default.createElement("svg", { width: "11", height: "6", xmlns: "http://www.w3.org/2000/svg" },
                                react_1.default.createElement("path", { d: "m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z" })), onClick: handleCollapseClick },
                            expanded ? 'Less' : 'More',
                            " options"))) : null)),
            react_1.default.createElement("div", { className: "wallet-adapter-modal-overlay", onMouseDown: handleClose })), portal));
};
exports.WalletModal = WalletModal;
//# sourceMappingURL=WalletModal.js.map