import { BaseSignerWalletAdapter } from '@solana/wallet-adapter-base';
import { PublicKey, Transaction } from '@solana/web3.js';
export interface CloverWalletWalletAdapterConfig {
    pollInterval?: number;
    pollCount?: number;
}
export declare class CloverWalletWalletAdapter extends BaseSignerWalletAdapter {
    private _connecting;
    private _wallet;
    private _publicKey;
    constructor(config?: CloverWalletWalletAdapterConfig);
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
