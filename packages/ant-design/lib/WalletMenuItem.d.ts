import { Wallet } from '@solana/wallet-adapter-wallets';
import { MenuItemProps } from 'antd';
import { FC, MouseEventHandler } from 'react';
interface WalletMenuItemProps extends Omit<MenuItemProps, 'onClick'> {
    onClick: MouseEventHandler<HTMLButtonElement>;
    wallet: Wallet;
}
export declare const WalletMenuItem: FC<WalletMenuItemProps>;
export {};
