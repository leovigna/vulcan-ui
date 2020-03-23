import Web3 from 'web3'

let web3;
// Modern DApp Browsers
export const mainnetWeb3 = new Web3(process.env.REACT_APP_INFURA_MAINNET_WSS)
export const ropstenWeb3 = new Web3(process.env.REACT_APP_INFURA_ROPSTEN_WSS)


if (window.ethereum) {
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