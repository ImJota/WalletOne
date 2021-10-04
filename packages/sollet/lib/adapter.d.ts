import { BaseSignerWalletAdapter, WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PublicKey, Transaction } from '@solana/web3.js';
interface SolletWallet {
    postMessage(...args: unknown[]): unknown;
}
export interface SolletWalletAdapterConfig {
    provider?: string | SolletWallet;
    network?: WalletAdapterNetwork;
    pollInterval?: number;
    pollCount?: number;
}
export declare class SolletWalletAdapter extends BaseSignerWalletAdapter {
    private _provider;
    private _network;
    private _connecting;
    private _wallet;
    constructor(config?: SolletWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get ready(): boolean;
    get connecting(): boolean;
    get connected(): boolean;
    get autoApprove(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
    private _disconnected;
}
export {};
