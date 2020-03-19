//import ERC20Token from "./contracts/ERC20Token.json"
//import CrowdsaleSimple from "./contracts/CrowdsaleSimple.json"
import Web3 from 'web3'
import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'

let web3;
// Modern DApp Browsers
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
        window.ethereum.enable().then(function () {
            // User has allowed account access to DApp...
        });
    } catch (e) {
        // User has denied account access to DApp...
    }
}
// Legacy DApp Browsers
else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
}
// Non-DApp Browsers
else {
    alert('You have to install MetaMask !');
}

const address = "0xF5fff180082d6017036B771bA883025c654BC935"
const AggregatorUSDBTC = new web3.eth.Contract(AggregatorABI.compilerOutput.abi, address)

const options = {
    /*
    web3: {
        block: false,
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:7545"
        }
    },
    */
    contracts: [
        {
            contractName: 'AggregatorUSDBTC',
            web3Contract: AggregatorUSDBTC
        }
    ],
    events: {
        AggregatorUSDBTC: ["AnswerUpdated", "ResponseReceived"]
    },
    polls: {
        accounts: 1500
    }
}

export default options
