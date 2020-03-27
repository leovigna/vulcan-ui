import web3 from './web3global'

//console.log(web3)

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
    ],
    events: {
    },
    polls: {
        accounts: 1500
    }
}

export default options
