import { BaseSignerWalletAdapter } from '@solana/wallet-adapter-base';
import { PublicKey, Transaction } from '@solana/web3.js';
import { ClientOptions, ClientTypes } from '@walletconnect/types';
export declare enum WalletConnectChainID {
    Mainnet = "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
    Devnet = "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"
}
export declare enum WalletConnectRPCMethod {
    SOL_SIGN_TRANSACTION = "sol_signTransaction"
}
export interface WalletConnectWalletAdapterConfig {
    options: ClientOptions;
    params?: ClientTypes.ConnectParams;
}
export declare class WalletConnectWalletAdapter extends BaseSignerWalletAdapter {
    private _publicKey;
    private _connecting;
    private _options;
    private _params;
    private _client;
    constructor(config: WalletConnectWalletAdapterConfig);
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
