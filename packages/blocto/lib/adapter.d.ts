import { BaseWalletAdapter, SendTransactionOptions, WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Connection, PublicKey, Transaction, TransactionSignature } from '@solana/web3.js';
export interface BloctoWalletAdapterConfig {
    network?: WalletAdapterNetwork;
}
export declare class BloctoWalletAdapter extends BaseWalletAdapter {
    private _connecting;
    private _wallet;
    private _publicKey;
    private _network;
    constructor(config?: BloctoWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get ready(): boolean;
    get connecting(): boolean;
    get connected(): boolean;
    get autoApprove(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendTransaction(transaction: Transaction, connection: Connection, options?: SendTransactionOptions): Promise<TransactionSignature>;
}
