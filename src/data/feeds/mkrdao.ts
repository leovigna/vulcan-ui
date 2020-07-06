import { MKRDaoFeed } from "../../store/feed/types";

export const testcontracts: MKRDaoFeed[] = [
    {
        id: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        networkId: "1",
        protocol: "mkrdao",
        address: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        name: "eth-usd",
        title: "ETH/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-9,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        read: {
            contractId: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763"
        }
    }
]

const contracts: MKRDaoFeed[] = [
    {
        id: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        networkId: "1",
        protocol: "mkrdao",
        address: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        name: "eth-usd",
        title: "ETH/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-9,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        read: {
            contractId: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763"
        }
    }
]

export default contracts;