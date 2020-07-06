import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'
import web3 from './web3global'
import TellorGetters from './contracts/TellorGetters.json'
import UserContract from './contracts/UserContract.json'
import MKRDaoDSValue from './contracts/MKRDaoDSValue.json'
import contracts, { testContracts } from './data/feeds'

const feedToWeb3Contract = (feed: Feed) => {
    switch (feed.protocol) {
        case 'chainlink':
            return ({
                contractName: feed.address,
                web3Contract: new web3.eth.Contract(AggregatorABI.compilerOutput.abi, feed.address),
                events: ['AnswerUpdated', 'ResponseReceived']
            })
        case 'tellor':
            break
        case 'mkrdao':
            return ({
                contractName: feed.address,
                web3Contract: new web3.eth.Contract(MKRDaoDSValue.abi, feed.address),
                events: ['LogValue']
            })
        case 'coinbase':
            break
    }
}

const web3Contracts = contracts.map(feedToWeb3Contract).filter((i) => !!i)
const testWeb3Contracts = testContracts.map(feedToWeb3Contract).filter((i) => !!i)

const tellorContracts = [
    {
        contractName: '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5',
        web3Contract: new web3.eth.Contract(TellorGetters.abi, '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5'),
        events: ['NewValue', 'DataRequested']
    },
    {
        contractName: '0xCaC3937932621F62D94aCdE77bBB2a091FD26f58',
        web3Contract: new web3.eth.Contract(UserContract.abi, '0xCaC3937932621F62D94aCdE77bBB2a091FD26f58')
    }
]
web3Contracts.push(...tellorContracts)
testWeb3Contracts.push(...tellorContracts)

const drizzleContracts = process.env.NODE_ENV === 'development' ? testWeb3Contracts : web3Contracts
const options = {
    web3: {
        block: false,
        customProvider: web3,
        fallback: {
            type: "ws",
            url: process.env.REACT_APP_INFURA_MAINNET_WSS
        }
    },
    contracts: [
        ...drizzleContracts
    ],
    events: {
    },
    polls: {
        accounts: 1500
    }
}

export default options
