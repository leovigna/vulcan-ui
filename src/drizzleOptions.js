import web3 from './web3global'
import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'

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
    ],
    events: {
    },
    polls: {
        accounts: 1500
    }
}

export default options
