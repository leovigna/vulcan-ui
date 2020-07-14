//@ts-nocheck
import { ChainlinkFeed } from "../../store/feed/types";

export const testcontracts: ChainlinkFeed[] = [
    {
        id: "0xF5fff180082d6017036B771bA883025c654BC935-1",
        networkId: "1",
        protocol: "chainlink",
        address: "0xF5fff180082d6017036B771bA883025c654BC935",
        name: "btc-usd",
        title: "BTC/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-8,
                decimals: 2
            },
            format: "$ %(value)s"
        },
        latestAnswer: {
            contractId: "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        latestTimestamp: {
            contractId: "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        latestRound: {
            contractId: "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        getAnswer: {},
        getTimestamp: {}
    },
]

const contracts: ChainlinkFeed[] = []

export default contracts;