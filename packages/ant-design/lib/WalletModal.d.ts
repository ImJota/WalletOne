import { ModalProps } from 'antd';
import { FC } from 'react';
export interface WalletModalProps extends Omit<ModalProps, 'visible'> {
    featuredWallets?: number;
}
export declare const WalletModal: FC<WalletModalProps>;
