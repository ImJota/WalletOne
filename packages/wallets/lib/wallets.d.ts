import { MessageSignerWalletAdapter, SignerWalletAdapter, WalletAdapter } from '@solana/wallet-adapter-base';
import { BitpieWalletAdapterConfig } from '@solana/wallet-adapter-bitpie';
import { BloctoWalletAdapterConfig } from '@solana/wallet-adapter-blocto';
import { Coin98WalletAdapterConfig } from '@solana/wallet-adapter-coin98';
import { LedgerWalletAdapterConfig } from '@solana/wallet-adapter-ledger';
import { MathWalletWalletAdapterConfig } from '@solana/wallet-adapter-mathwallet';
import { PhantomWalletAdapterConfig } from '@solana/wallet-adapter-phantom';
import { SafePalWalletAdapterConfig } from '@solana/wallet-adapter-safepal';
import { SlopeWalletAdapterConfig } from '@solana/wallet-adapter-slope';
import { SolflareWalletAdapterConfig } from '@solana/wallet-adapter-solflare';
import { SolletWalletAdapterConfig } from '@solana/wallet-adapter-sollet';
import { SolongWalletAdapterConfig } from '@solana/wallet-adapter-solong';
import { TorusWalletAdapterConfig } from '@solana/wallet-adapter-torus';
import { CloverWalletWalletAdapterConfig } from '@solana/wallet-adapter-clover';
export declare enum WalletName {
    Bitpie = "Bitpie",
    Blocto = "Blocto",
    Clover = "Clover",
    Coin98 = "Coin98",
    Ledger = "Ledger",
    MathWallet = "MathWallet",
    Phantom = "Phantom",
    SafePal = "SafePal",
    Slope = "Slope",
    Solflare = "Solflare",
    SolflareWeb = "Solflare (Web)",
    Sollet = "Sollet",
    SolletExtension = "Sollet (Extension)",
    Solong = "Solong",
    Torus = "Torus"
}
export interface Wallet {
    name: WalletName;
    url: string;
    icon: string;
    adapter: () => WalletAdapter | SignerWalletAdapter | MessageSignerWalletAdapter;
}
export declare const ICONS_URL = "https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons";
export declare const getBitpieWallet: (config?: BitpieWalletAdapterConfig) => Wallet;
export declare const getBloctoWallet: (config?: BloctoWalletAdapterConfig) => Wallet;
export declare const getCloverWallet: (config?: CloverWalletWalletAdapterConfig) => Wallet;
export declare const getCoin98Wallet: (config?: Coin98WalletAdapterConfig) => Wallet;
export declare const getLedgerWallet: (config?: LedgerWalletAdapterConfig) => Wallet;
export declare const getMathWallet: (config?: MathWalletWalletAdapterConfig) => Wallet;
export declare const getPhantomWallet: (config?: PhantomWalletAdapterConfig) => Wallet;
export declare const getSafePalWallet: (config?: SafePalWalletAdapterConfig) => Wallet;
export declare const getSlopeWallet: (config?: SlopeWalletAdapterConfig) => Wallet;
export declare const getSolflareWallet: (config?: SolflareWalletAdapterConfig) => Wallet;
export declare const getSolflareWebWallet: ({ provider, ...config }?: SolletWalletAdapterConfig) => Wallet;
export declare const getSolletWallet: ({ provider, ...config }?: SolletWalletAdapterConfig) => Wallet;
export declare const getSolletExtensionWallet: ({ provider, ...config }?: SolletWalletAdapterConfig) => Wallet;
export declare const getSolongWallet: (config?: SolongWalletAdapterConfig) => Wallet;
export declare const getTorusWallet: (config: TorusWalletAdapterConfig) => Wallet;
