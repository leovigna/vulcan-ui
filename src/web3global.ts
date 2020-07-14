// @ts-nocheck

import Web3 from 'web3'

let web3: any;
// Modern DApp Browsers
export const mainnetWeb3 = new Web3(process.env.REACT_APP_INFURA_MAINNET_WSS)
export const ropstenWeb3 = new Web3(process.env.REACT_APP_INFURA_ROPSTEN_WSS)
mainnetWeb3._provider.networkVersion = '1'
ropstenWeb3._provider.networkVersion = '3'

export const web3ForNetworkId = (id: string) => {
    if (id === '1' || id === '0x1') return mainnetWeb3;
    else if (id === '3' || id === '0x3') return ropstenWeb3;
}


if (window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false

    web3 = new Web3(window.ethereum);

    try {
        window.ethereum.enable().then(function () {
            // User has allowed account access to DApp...
        });
    } catch (e) {
        // User has denied account access to DApp...
        web3 = new Web3(process.env.REACT_APP_INFURA_MAINNET_WSS)
    }
}
// Legacy DApp Browsers
else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
}

// Non-DApp Browsers
else {
    web3 = new Web3(process.env.REACT_APP_INFURA_MAINNET_WSS)
    //alert('You have to install MetaMask !');
    //Patch Window with fallback
    window.ethereum = web3;
    window.web3 = { currentProvider: web3 };
}

export default web3;