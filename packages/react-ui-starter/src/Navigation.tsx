import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';

const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2 className="navbar-brand">Name of the Page</h2>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">RutaOne</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">RutaTwo</a>
                </li>
              </ul>
            </div>
            <div>
                <WalletMultiButton />
                {wallet && <WalletDisconnectButton />}
            </div>
        </nav>
    );
};

export default Navigation;
