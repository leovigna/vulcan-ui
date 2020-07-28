//@ts-nocheck
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
        },
        rank: 4
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
        },
        rank: 4,
    },
    {
        id: "0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6",
        networkId: "1",
        protocol: "mkrdao",
        address: "0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6",
        name: "bat-usd",
        title: "BAT/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-9,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        read: {
            contractId: "0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6"
        },
        rank: 12
    },
    {
        id: "0xf36B79BD4C0904A5F350F1e4f776B81208c13069",
        networkId: "1",
        protocol: "mkrdao",
        address: "0xf36B79BD4C0904A5F350F1e4f776B81208c13069",
        name: "knc-usd",
        title: "KNC/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-9,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        read: {
            contractId: "0xf36B79BD4C0904A5F350F1e4f776B81208c13069"
        },
        rank: 16
    },
    {
        id: "0xf185d0682d50819263941e5f4EacC763CC5C6C42",
        networkId: "1",
        protocol: "mkrdao",
        address: "0xf185d0682d50819263941e5f4EacC763CC5C6C42",
        name: "wbtc-usd",
        title: "WBTC/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-9,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        read: {
            contractId: "0xf185d0682d50819263941e5f4EacC763CC5C6C42"
        },
        rank: 8
    },
    {
        id: "0x7382c066801E7Acb2299aC8562847B9883f5CD3c",
        networkId: "1",
        protocol: "mkrdao",
        address: "0x7382c066801E7Acb2299aC8562847B9883f5CD3c",
        name: "zrx-usd",
        title: "ZRX/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-9,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        read: {
            contractId: "0x7382c066801E7Acb2299aC8562847B9883f5CD3c"
        },
        rank: 20
    }
]

export default contracts;