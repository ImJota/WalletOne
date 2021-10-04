import { BaseSignerWalletAdapter } from '@solana/wallet-adapter-base';
import { PublicKey, Transaction } from '@solana/web3.js';
export interface SafePalWalletAdapterConfig {
    pollInterval?: number;
    pollCount?: number;
}
export declare class SafePalWalletAdapter extends BaseSignerWalletAdapter {
    private _connecting;
    private _wallet;
    private _publicKey;
    constructor(config?: SafePalWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get ready(): boolean;
    get connecting(): boolean;
    get connected(): boolean;
    get autoApprove(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
}
