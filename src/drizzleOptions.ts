import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'
import web3 from './web3global'
import TellorGetters from './contracts/TellorGetters.json'
import UserContract from './contracts/UserContract.json'
import MKRDaoDSValue from './contracts/MKRDaoDSValue.json'

import { testContracts } from './data/feeds'

const chainlinkContracts = testContracts.filter((f) => f.protocol === 'chainlink').map((f) => {
    return ({
        contractName: f.address,
        web3Contract: new web3.eth.Contract(AggregatorABI.compilerOutput.abi, f.address)
    })
})

const mkrdaoContracts = testContracts.filter((f) => f.protocol === 'mkrdao').map((f) => {
    return ({
        contractName: f.address,
        web3Contract: new web3.eth.Contract(MKRDaoDSValue.abi, f.address),
        events: ['LogValue']
    })
})

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
        {
            contractName: '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5',
            web3Contract: new web3.eth.Contract(TellorGetters.abi, '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5')
        },
        {
            contractName: '0xCaC3937932621F62D94aCdE77bBB2a091FD26f58',
            web3Contract: new web3.eth.Contract(UserContract.abi, '0xCaC3937932621F62D94aCdE77bBB2a091FD26f58')
        },
        ...chainlinkContracts,
        ...mkrdaoContracts
    ],
    events: {
    },
    polls: {
        accounts: 1500
    }
}

export default options
