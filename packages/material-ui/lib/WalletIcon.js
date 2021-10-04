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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletIcon = void 0;
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const useStyles = (0, core_1.makeStyles)((theme) => ({
    root: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));
const WalletIcon = (_a) => {
    var { wallet } = _a, props = __rest(_a, ["wallet"]);
    const styles = useStyles();
    return wallet && react_1.default.createElement("img", Object.assign({ src: wallet.icon, alt: `${wallet.name} icon`, className: styles.root }, props));
};
exports.WalletIcon = WalletIcon;
//# sourceMappingURL=WalletIcon.js.map