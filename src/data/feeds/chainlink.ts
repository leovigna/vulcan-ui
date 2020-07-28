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

const contracts: ChainlinkFeed[] = [
    {
        "id": "0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c",
        "name": "btc-eth",
        "title": "BTC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c"
        },
        "latestTimestamp": {
            "contractId": "0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c"
        },
        "latestRound": {
            "contractId": "0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec",
        "name": "chf-usd",
        "title": "CHF/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec"
        },
        "latestTimestamp": {
            "contractId": "0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec"
        },
        "latestRound": {
            "contractId": "0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x037E8F2125bF532F3e228991e051c8A7253B642c-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x037E8F2125bF532F3e228991e051c8A7253B642c",
        "name": "dai-eth",
        "title": "DAI/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x037E8F2125bF532F3e228991e051c8A7253B642c"
        },
        "latestTimestamp": {
            "contractId": "0x037E8F2125bF532F3e228991e051c8A7253B642c"
        },
        "latestRound": {
            "contractId": "0x037E8F2125bF532F3e228991e051c8A7253B642c"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231",
        "name": "aud-usd",
        "title": "AUD/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231"
        },
        "latestTimestamp": {
            "contractId": "0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231"
        },
        "latestRound": {
            "contractId": "0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x11eF34572CcaB4c85f0BAf03c36a14e0A9C8C7eA-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x11eF34572CcaB4c85f0BAf03c36a14e0A9C8C7eA",
        "name": "oxt-usd",
        "title": "OXT/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x11eF34572CcaB4c85f0BAf03c36a14e0A9C8C7eA"
        },
        "latestTimestamp": {
            "contractId": "0x11eF34572CcaB4c85f0BAf03c36a14e0A9C8C7eA"
        },
        "latestRound": {
            "contractId": "0x11eF34572CcaB4c85f0BAf03c36a14e0A9C8C7eA"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x12A7E9E733480483aC5269212347934371D1A568-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x12A7E9E733480483aC5269212347934371D1A568",
        "name": "bz-usd",
        "title": "BZ/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x12A7E9E733480483aC5269212347934371D1A568"
        },
        "latestTimestamp": {
            "contractId": "0x12A7E9E733480483aC5269212347934371D1A568"
        },
        "latestRound": {
            "contractId": "0x12A7E9E733480483aC5269212347934371D1A568"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x13691B76C26630075e9Dd998c4ebD62394274d34-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x13691B76C26630075e9Dd998c4ebD62394274d34",
        "name": "mkr-eth",
        "title": "MKR/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x13691B76C26630075e9Dd998c4ebD62394274d34"
        },
        "latestTimestamp": {
            "contractId": "0x13691B76C26630075e9Dd998c4ebD62394274d34"
        },
        "latestRound": {
            "contractId": "0x13691B76C26630075e9Dd998c4ebD62394274d34"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x148176d1915d0F427aA215962a0e1946291ceC70-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x148176d1915d0F427aA215962a0e1946291ceC70",
        "name": "xau-usd",
        "title": "XAU/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x148176d1915d0F427aA215962a0e1946291ceC70"
        },
        "latestTimestamp": {
            "contractId": "0x148176d1915d0F427aA215962a0e1946291ceC70"
        },
        "latestRound": {
            "contractId": "0x148176d1915d0F427aA215962a0e1946291ceC70"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x151445852B0cfDf6A4CC81440F2AF99176e8AD08-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x151445852B0cfDf6A4CC81440F2AF99176e8AD08",
        "name": "gbp-usd",
        "title": "GBP/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x151445852B0cfDf6A4CC81440F2AF99176e8AD08"
        },
        "latestTimestamp": {
            "contractId": "0x151445852B0cfDf6A4CC81440F2AF99176e8AD08"
        },
        "latestRound": {
            "contractId": "0x151445852B0cfDf6A4CC81440F2AF99176e8AD08"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x16924ae9C2ac6cdbC9D6bB16FAfCD38BeD560936-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x16924ae9C2ac6cdbC9D6bB16FAfCD38BeD560936",
        "name": "ftse-gbp",
        "title": "FTSE/GBP",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "£ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x16924ae9C2ac6cdbC9D6bB16FAfCD38BeD560936"
        },
        "latestTimestamp": {
            "contractId": "0x16924ae9C2ac6cdbC9D6bB16FAfCD38BeD560936"
        },
        "latestRound": {
            "contractId": "0x16924ae9C2ac6cdbC9D6bB16FAfCD38BeD560936"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327",
        "name": "lend-eth",
        "title": "LEND/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327"
        },
        "latestTimestamp": {
            "contractId": "0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327"
        },
        "latestRound": {
            "contractId": "0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x1bD0826e9ab9023399AbF6844E690024eae49D13-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x1bD0826e9ab9023399AbF6844E690024eae49D13",
        "name": "gbp-usd",
        "title": "GBP/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x1bD0826e9ab9023399AbF6844E690024eae49D13"
        },
        "latestTimestamp": {
            "contractId": "0x1bD0826e9ab9023399AbF6844E690024eae49D13"
        },
        "latestRound": {
            "contractId": "0x1bD0826e9ab9023399AbF6844E690024eae49D13"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x23526d7DA4a36ae3ddb909D6e8f733A3Cc703Ad8-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x23526d7DA4a36ae3ddb909D6e8f733A3Cc703Ad8",
        "name": "lend-eth",
        "title": "LEND/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x23526d7DA4a36ae3ddb909D6e8f733A3Cc703Ad8"
        },
        "latestTimestamp": {
            "contractId": "0x23526d7DA4a36ae3ddb909D6e8f733A3Cc703Ad8"
        },
        "latestRound": {
            "contractId": "0x23526d7DA4a36ae3ddb909D6e8f733A3Cc703Ad8"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5",
        "name": "eur-usd",
        "title": "EUR/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5"
        },
        "latestTimestamp": {
            "contractId": "0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5"
        },
        "latestRound": {
            "contractId": "0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x2De050c0378D32D346A437a01A8272343C5e2409-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x2De050c0378D32D346A437a01A8272343C5e2409",
        "name": "ftm-eth",
        "title": "FTM/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x2De050c0378D32D346A437a01A8272343C5e2409"
        },
        "latestTimestamp": {
            "contractId": "0x2De050c0378D32D346A437a01A8272343C5e2409"
        },
        "latestRound": {
            "contractId": "0x2De050c0378D32D346A437a01A8272343C5e2409"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x32dbd3214aC75223e27e575C53944307914F7a90-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x32dbd3214aC75223e27e575C53944307914F7a90",
        "name": "link-usd",
        "title": "LINK/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x32dbd3214aC75223e27e575C53944307914F7a90"
        },
        "latestTimestamp": {
            "contractId": "0x32dbd3214aC75223e27e575C53944307914F7a90"
        },
        "latestRound": {
            "contractId": "0x32dbd3214aC75223e27e575C53944307914F7a90"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x3309C3c1a468125639B2CB5bba264053309ad1D3-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x3309C3c1a468125639B2CB5bba264053309ad1D3",
        "name": "eur-usd",
        "title": "EUR/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x3309C3c1a468125639B2CB5bba264053309ad1D3"
        },
        "latestTimestamp": {
            "contractId": "0x3309C3c1a468125639B2CB5bba264053309ad1D3"
        },
        "latestRound": {
            "contractId": "0x3309C3c1a468125639B2CB5bba264053309ad1D3"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x33E82253e8b84e7Ea95B7eDC710Be3bF576A975E-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x33E82253e8b84e7Ea95B7eDC710Be3bF576A975E",
        "name": "xag-usd",
        "title": "XAG/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x33E82253e8b84e7Ea95B7eDC710Be3bF576A975E"
        },
        "latestTimestamp": {
            "contractId": "0x33E82253e8b84e7Ea95B7eDC710Be3bF576A975E"
        },
        "latestRound": {
            "contractId": "0x33E82253e8b84e7Ea95B7eDC710Be3bF576A975E"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x3E0De81e212eB9ECCD23bb3a9B0E1FAC6C8170fc-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x3E0De81e212eB9ECCD23bb3a9B0E1FAC6C8170fc",
        "name": "enj-eth",
        "title": "ENJ/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x3E0De81e212eB9ECCD23bb3a9B0E1FAC6C8170fc"
        },
        "latestTimestamp": {
            "contractId": "0x3E0De81e212eB9ECCD23bb3a9B0E1FAC6C8170fc"
        },
        "latestRound": {
            "contractId": "0x3E0De81e212eB9ECCD23bb3a9B0E1FAC6C8170fc"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x3dBb9Fa54eFc244e1823B5782Be8a08cC143ea5e-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x3dBb9Fa54eFc244e1823B5782Be8a08cC143ea5e",
        "name": "wom-eth",
        "title": "WOM/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x3dBb9Fa54eFc244e1823B5782Be8a08cC143ea5e"
        },
        "latestTimestamp": {
            "contractId": "0x3dBb9Fa54eFc244e1823B5782Be8a08cC143ea5e"
        },
        "latestRound": {
            "contractId": "0x3dBb9Fa54eFc244e1823B5782Be8a08cC143ea5e"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x3ed182eB5D6a3dca61518DD484A53C57b55B3954-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x3ed182eB5D6a3dca61518DD484A53C57b55B3954",
        "name": "rep-eth",
        "title": "REP/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x3ed182eB5D6a3dca61518DD484A53C57b55B3954"
        },
        "latestTimestamp": {
            "contractId": "0x3ed182eB5D6a3dca61518DD484A53C57b55B3954"
        },
        "latestRound": {
            "contractId": "0x3ed182eB5D6a3dca61518DD484A53C57b55B3954"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x3f6E09A4EC3811765F5b2ad15c0279910dbb2c04-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x3f6E09A4EC3811765F5b2ad15c0279910dbb2c04",
        "name": "n225-jpy",
        "title": "N225/JPY",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "¥ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x3f6E09A4EC3811765F5b2ad15c0279910dbb2c04"
        },
        "latestTimestamp": {
            "contractId": "0x3f6E09A4EC3811765F5b2ad15c0279910dbb2c04"
        },
        "latestRound": {
            "contractId": "0x3f6E09A4EC3811765F5b2ad15c0279910dbb2c04"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x46Bb139F23B01fef37CB95aE56274804bC3b3e86-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x46Bb139F23B01fef37CB95aE56274804bC3b3e86",
        "name": "scex-usd",
        "title": "sCEX/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x46Bb139F23B01fef37CB95aE56274804bC3b3e86"
        },
        "latestTimestamp": {
            "contractId": "0x46Bb139F23B01fef37CB95aE56274804bC3b3e86"
        },
        "latestRound": {
            "contractId": "0x46Bb139F23B01fef37CB95aE56274804bC3b3e86"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x46FdE690205e09d3c10015A1Ef0281dD699423d0-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x46FdE690205e09d3c10015A1Ef0281dD699423d0",
        "name": "zrx-eth",
        "title": "ZRX/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x46FdE690205e09d3c10015A1Ef0281dD699423d0"
        },
        "latestTimestamp": {
            "contractId": "0x46FdE690205e09d3c10015A1Ef0281dD699423d0"
        },
        "latestRound": {
            "contractId": "0x46FdE690205e09d3c10015A1Ef0281dD699423d0"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x54c01Fe3eb5F1Ac6fab776766FF925ADd6608809-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x54c01Fe3eb5F1Ac6fab776766FF925ADd6608809",
        "name": "ftse-gbp",
        "title": "FTSE/GBP",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "£ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x54c01Fe3eb5F1Ac6fab776766FF925ADd6608809"
        },
        "latestTimestamp": {
            "contractId": "0x54c01Fe3eb5F1Ac6fab776766FF925ADd6608809"
        },
        "latestRound": {
            "contractId": "0x54c01Fe3eb5F1Ac6fab776766FF925ADd6608809"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x560B06e8897A0E52DbD5723271886BbCC5C1f52a-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x560B06e8897A0E52DbD5723271886BbCC5C1f52a",
        "name": "bnt-usd",
        "title": "BNT/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x560B06e8897A0E52DbD5723271886BbCC5C1f52a"
        },
        "latestTimestamp": {
            "contractId": "0x560B06e8897A0E52DbD5723271886BbCC5C1f52a"
        },
        "latestRound": {
            "contractId": "0x560B06e8897A0E52DbD5723271886BbCC5C1f52a"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x5d4BB541EED49D0290730b4aB332aA46bd27d888-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x5d4BB541EED49D0290730b4aB332aA46bd27d888",
        "name": "busd-eth",
        "title": "BUSD/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x5d4BB541EED49D0290730b4aB332aA46bd27d888"
        },
        "latestTimestamp": {
            "contractId": "0x5d4BB541EED49D0290730b4aB332aA46bd27d888"
        },
        "latestRound": {
            "contractId": "0x5d4BB541EED49D0290730b4aB332aA46bd27d888"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x613a38AC1659769640aaE063C651F48E0250454C-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x613a38AC1659769640aaE063C651F48E0250454C",
        "name": "link-usd",
        "title": "LINK/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x613a38AC1659769640aaE063C651F48E0250454C"
        },
        "latestTimestamp": {
            "contractId": "0x613a38AC1659769640aaE063C651F48E0250454C"
        },
        "latestRound": {
            "contractId": "0x613a38AC1659769640aaE063C651F48E0250454C"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x628Ac7C9742a52931486b9af6e54db4511FeFE42-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x628Ac7C9742a52931486b9af6e54db4511FeFE42",
        "name": "jpy-usd",
        "title": "JPY/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x628Ac7C9742a52931486b9af6e54db4511FeFE42"
        },
        "latestTimestamp": {
            "contractId": "0x628Ac7C9742a52931486b9af6e54db4511FeFE42"
        },
        "latestRound": {
            "contractId": "0x628Ac7C9742a52931486b9af6e54db4511FeFE42"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea",
        "name": "susd-eth",
        "title": "SUSD/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea"
        },
        "latestTimestamp": {
            "contractId": "0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea"
        },
        "latestRound": {
            "contractId": "0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x73ead35fd6A572EF763B13Be65a9db96f7643577-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x73ead35fd6A572EF763B13Be65a9db96f7643577",
        "name": "tusd-eth",
        "title": "TUSD/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x73ead35fd6A572EF763B13Be65a9db96f7643577"
        },
        "latestTimestamp": {
            "contractId": "0x73ead35fd6A572EF763B13Be65a9db96f7643577"
        },
        "latestRound": {
            "contractId": "0x73ead35fd6A572EF763B13Be65a9db96f7643577"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x759a58A839d00Cd905E4Ae0C29C4c50757860cfb-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x759a58A839d00Cd905E4Ae0C29C4c50757860cfb",
        "name": "bnt-eth",
        "title": "BNT/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x759a58A839d00Cd905E4Ae0C29C4c50757860cfb"
        },
        "latestTimestamp": {
            "contractId": "0x759a58A839d00Cd905E4Ae0C29C4c50757860cfb"
        },
        "latestRound": {
            "contractId": "0x759a58A839d00Cd905E4Ae0C29C4c50757860cfb"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x7925998A4A18D141cF348091a7C5823482056fae-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x7925998A4A18D141cF348091a7C5823482056fae",
        "name": "nmr-eth",
        "title": "NMR/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x7925998A4A18D141cF348091a7C5823482056fae"
        },
        "latestTimestamp": {
            "contractId": "0x7925998A4A18D141cF348091a7C5823482056fae"
        },
        "latestRound": {
            "contractId": "0x7925998A4A18D141cF348091a7C5823482056fae"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x79917759E82Fe6B5EBe1aD87D7291860D20E59e4-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x79917759E82Fe6B5EBe1aD87D7291860D20E59e4",
        "name": "chf-usd",
        "title": "CHF/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x79917759E82Fe6B5EBe1aD87D7291860D20E59e4"
        },
        "latestTimestamp": {
            "contractId": "0x79917759E82Fe6B5EBe1aD87D7291860D20E59e4"
        },
        "latestRound": {
            "contractId": "0x79917759E82Fe6B5EBe1aD87D7291860D20E59e4"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x7AE7781C7F3a5182596d161e037E6db8e36328ef-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x7AE7781C7F3a5182596d161e037E6db8e36328ef",
        "name": "sdefi-usd",
        "title": "sDEFI/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x7AE7781C7F3a5182596d161e037E6db8e36328ef"
        },
        "latestTimestamp": {
            "contractId": "0x7AE7781C7F3a5182596d161e037E6db8e36328ef"
        },
        "latestRound": {
            "contractId": "0x7AE7781C7F3a5182596d161e037E6db8e36328ef"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x7c4a899b680651939E134f9225775e9F0aDF303A-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x7c4a899b680651939E134f9225775e9F0aDF303A",
        "name": "dai-eth",
        "title": "DAI/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x7c4a899b680651939E134f9225775e9F0aDF303A"
        },
        "latestTimestamp": {
            "contractId": "0x7c4a899b680651939E134f9225775e9F0aDF303A"
        },
        "latestRound": {
            "contractId": "0x7c4a899b680651939E134f9225775e9F0aDF303A"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x81FC061d66d029c77818D5fb637731ba7c04dd1E-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x81FC061d66d029c77818D5fb637731ba7c04dd1E",
        "name": "link-eth",
        "title": "LINK/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x81FC061d66d029c77818D5fb637731ba7c04dd1E"
        },
        "latestTimestamp": {
            "contractId": "0x81FC061d66d029c77818D5fb637731ba7c04dd1E"
        },
        "latestRound": {
            "contractId": "0x81FC061d66d029c77818D5fb637731ba7c04dd1E"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x81dCb0eE6ebD2F37821193120d87B1e160da52E9-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x81dCb0eE6ebD2F37821193120d87B1e160da52E9",
        "name": "knc-eth",
        "title": "KNC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x81dCb0eE6ebD2F37821193120d87B1e160da52E9"
        },
        "latestTimestamp": {
            "contractId": "0x81dCb0eE6ebD2F37821193120d87B1e160da52E9"
        },
        "latestRound": {
            "contractId": "0x81dCb0eE6ebD2F37821193120d87B1e160da52E9"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x87586833520A8F209b80a3201f4fe1ea480f857d-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x87586833520A8F209b80a3201f4fe1ea480f857d",
        "name": "xhv-usd",
        "title": "XHV/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x87586833520A8F209b80a3201f4fe1ea480f857d"
        },
        "latestTimestamp": {
            "contractId": "0x87586833520A8F209b80a3201f4fe1ea480f857d"
        },
        "latestRound": {
            "contractId": "0x87586833520A8F209b80a3201f4fe1ea480f857d"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x8770Afe90c52Fd117f29192866DE705F63e59407-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x8770Afe90c52Fd117f29192866DE705F63e59407",
        "name": "lrc-eth",
        "title": "LRC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x8770Afe90c52Fd117f29192866DE705F63e59407"
        },
        "latestTimestamp": {
            "contractId": "0x8770Afe90c52Fd117f29192866DE705F63e59407"
        },
        "latestRound": {
            "contractId": "0x8770Afe90c52Fd117f29192866DE705F63e59407"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B",
        "name": "xag-usd",
        "title": "XAG/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B"
        },
        "latestTimestamp": {
            "contractId": "0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B"
        },
        "latestRound": {
            "contractId": "0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x8ca33d0502d5206297155F2c14271233f4a832c9-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x8ca33d0502d5206297155F2c14271233f4a832c9",
        "name": "usdt-eth",
        "title": "USDT/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x8ca33d0502d5206297155F2c14271233f4a832c9"
        },
        "latestTimestamp": {
            "contractId": "0x8ca33d0502d5206297155F2c14271233f4a832c9"
        },
        "latestRound": {
            "contractId": "0x8ca33d0502d5206297155F2c14271233f4a832c9"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x93e0C0359E227Af532E560A5573f056e644f8f53-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x93e0C0359E227Af532E560A5573f056e644f8f53",
        "name": "n225-jpy",
        "title": "N225/JPY",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "¥ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x93e0C0359E227Af532E560A5573f056e644f8f53"
        },
        "latestTimestamp": {
            "contractId": "0x93e0C0359E227Af532E560A5573f056e644f8f53"
        },
        "latestRound": {
            "contractId": "0x93e0C0359E227Af532E560A5573f056e644f8f53"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0x9b4e2579895efa2b4765063310Dc4109a7641129-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0x9b4e2579895efa2b4765063310Dc4109a7641129",
        "name": "bat-eth",
        "title": "BAT/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0x9b4e2579895efa2b4765063310Dc4109a7641129"
        },
        "latestTimestamp": {
            "contractId": "0x9b4e2579895efa2b4765063310Dc4109a7641129"
        },
        "latestRound": {
            "contractId": "0x9b4e2579895efa2b4765063310Dc4109a7641129"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8",
        "name": "zrx-eth",
        "title": "ZRX/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8"
        },
        "latestTimestamp": {
            "contractId": "0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8"
        },
        "latestRound": {
            "contractId": "0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xA45Cb1BBb00cd9c28435c58df11c6A3f08f36302-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xA45Cb1BBb00cd9c28435c58df11c6A3f08f36302",
        "name": "btc-usd",
        "title": "BTC/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xA45Cb1BBb00cd9c28435c58df11c6A3f08f36302"
        },
        "latestTimestamp": {
            "contractId": "0xA45Cb1BBb00cd9c28435c58df11c6A3f08f36302"
        },
        "latestRound": {
            "contractId": "0xA45Cb1BBb00cd9c28435c58df11c6A3f08f36302"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xB51DD92a2eE1cE46dF8e7661737a5Cdd47Fb9F24-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xB51DD92a2eE1cE46dF8e7661737a5Cdd47Fb9F24",
        "name": "usdc-eth",
        "title": "USDC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xB51DD92a2eE1cE46dF8e7661737a5Cdd47Fb9F24"
        },
        "latestTimestamp": {
            "contractId": "0xB51DD92a2eE1cE46dF8e7661737a5Cdd47Fb9F24"
        },
        "latestRound": {
            "contractId": "0xB51DD92a2eE1cE46dF8e7661737a5Cdd47Fb9F24"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xB7B1C8F4095D819BDAE25e7a63393CDF21fd02Ea-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xB7B1C8F4095D819BDAE25e7a63393CDF21fd02Ea",
        "name": "ren-eth",
        "title": "REN/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xB7B1C8F4095D819BDAE25e7a63393CDF21fd02Ea"
        },
        "latestTimestamp": {
            "contractId": "0xB7B1C8F4095D819BDAE25e7a63393CDF21fd02Ea"
        },
        "latestRound": {
            "contractId": "0xB7B1C8F4095D819BDAE25e7a63393CDF21fd02Ea"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94",
        "name": "xhv-usd",
        "title": "XHV/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94"
        },
        "latestTimestamp": {
            "contractId": "0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94"
        },
        "latestRound": {
            "contractId": "0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xBDCEed95713a77c725a9206308dDEacf443d150f-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xBDCEed95713a77c725a9206308dDEacf443d150f",
        "name": "snx-eth",
        "title": "SNX/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xBDCEed95713a77c725a9206308dDEacf443d150f"
        },
        "latestTimestamp": {
            "contractId": "0xBDCEed95713a77c725a9206308dDEacf443d150f"
        },
        "latestRound": {
            "contractId": "0xBDCEed95713a77c725a9206308dDEacf443d150f"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xCB69fDAA8d0b2b5402236e1E5dbC857956A7c00b-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xCB69fDAA8d0b2b5402236e1E5dbC857956A7c00b",
        "name": "bat-eth",
        "title": "BAT/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xCB69fDAA8d0b2b5402236e1E5dbC857956A7c00b"
        },
        "latestTimestamp": {
            "contractId": "0xCB69fDAA8d0b2b5402236e1E5dbC857956A7c00b"
        },
        "latestRound": {
            "contractId": "0xCB69fDAA8d0b2b5402236e1E5dbC857956A7c00b"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xD06fA7De9dE011b14B2943905E903A53Aa6e78Eb-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xD06fA7De9dE011b14B2943905E903A53Aa6e78Eb",
        "name": "busd-eth",
        "title": "BUSD/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xD06fA7De9dE011b14B2943905E903A53Aa6e78Eb"
        },
        "latestTimestamp": {
            "contractId": "0xD06fA7De9dE011b14B2943905E903A53Aa6e78Eb"
        },
        "latestRound": {
            "contractId": "0xD06fA7De9dE011b14B2943905E903A53Aa6e78Eb"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3",
        "name": "mkr-eth",
        "title": "MKR/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3"
        },
        "latestTimestamp": {
            "contractId": "0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3"
        },
        "latestRound": {
            "contractId": "0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xE23d1142dE4E83C08bb048bcab54d50907390828-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xE23d1142dE4E83C08bb048bcab54d50907390828",
        "name": "snx-eth",
        "title": "SNX/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xE23d1142dE4E83C08bb048bcab54d50907390828"
        },
        "latestTimestamp": {
            "contractId": "0xE23d1142dE4E83C08bb048bcab54d50907390828"
        },
        "latestRound": {
            "contractId": "0xE23d1142dE4E83C08bb048bcab54d50907390828"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xF5471b72b05D46c0294134af4544179CfBA6AC3E-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xF5471b72b05D46c0294134af4544179CfBA6AC3E",
        "name": "firedrilleth-usd",
        "title": "FiredrillETH/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xF5471b72b05D46c0294134af4544179CfBA6AC3E"
        },
        "latestTimestamp": {
            "contractId": "0xF5471b72b05D46c0294134af4544179CfBA6AC3E"
        },
        "latestRound": {
            "contractId": "0xF5471b72b05D46c0294134af4544179CfBA6AC3E"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xF5fff180082d6017036B771bA883025c654BC935-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xF5fff180082d6017036B771bA883025c654BC935",
        "name": "btc-usd",
        "title": "BTC/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        "latestTimestamp": {
            "contractId": "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        "latestRound": {
            "contractId": "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F",
        "name": "eth-usd",
        "title": "ETH/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F"
        },
        "latestTimestamp": {
            "contractId": "0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F"
        },
        "latestRound": {
            "contractId": "0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xF9F430025A70Da7ED2614F30aF33b942211EA40c-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xF9F430025A70Da7ED2614F30aF33b942211EA40c",
        "name": "mana-eth",
        "title": "MANA/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xF9F430025A70Da7ED2614F30aF33b942211EA40c"
        },
        "latestTimestamp": {
            "contractId": "0xF9F430025A70Da7ED2614F30aF33b942211EA40c"
        },
        "latestRound": {
            "contractId": "0xF9F430025A70Da7ED2614F30aF33b942211EA40c"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xa7D38FBD325a6467894A13EeFD977aFE558bC1f0-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xa7D38FBD325a6467894A13EeFD977aFE558bC1f0",
        "name": "dai-usd",
        "title": "DAI/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xa7D38FBD325a6467894A13EeFD977aFE558bC1f0"
        },
        "latestTimestamp": {
            "contractId": "0xa7D38FBD325a6467894A13EeFD977aFE558bC1f0"
        },
        "latestRound": {
            "contractId": "0xa7D38FBD325a6467894A13EeFD977aFE558bC1f0"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE",
        "name": "usdt-eth",
        "title": "USDT/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE"
        },
        "latestTimestamp": {
            "contractId": "0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE"
        },
        "latestRound": {
            "contractId": "0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xac163F20362A320633433D13eC8949Cc01a88108-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xac163F20362A320633433D13eC8949Cc01a88108",
        "name": "btc-eth",
        "title": "BTC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xac163F20362A320633433D13eC8949Cc01a88108"
        },
        "latestTimestamp": {
            "contractId": "0xac163F20362A320633433D13eC8949Cc01a88108"
        },
        "latestRound": {
            "contractId": "0xac163F20362A320633433D13eC8949Cc01a88108"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935",
        "name": "xau-usd",
        "title": "XAU/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935"
        },
        "latestTimestamp": {
            "contractId": "0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935"
        },
        "latestRound": {
            "contractId": "0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xb8b513d9cf440C1b6f5C7142120d611C94fC220c-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xb8b513d9cf440C1b6f5C7142120d611C94fC220c",
        "name": "rep-eth",
        "title": "REP/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xb8b513d9cf440C1b6f5C7142120d611C94fC220c"
        },
        "latestTimestamp": {
            "contractId": "0xb8b513d9cf440C1b6f5C7142120d611C94fC220c"
        },
        "latestRound": {
            "contractId": "0xb8b513d9cf440C1b6f5C7142120d611C94fC220c"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xbEd77dF458715Df69838529694d10B17ff4d4844-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xbEd77dF458715Df69838529694d10B17ff4d4844",
        "name": "susd-eth",
        "title": "SUSD/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xbEd77dF458715Df69838529694d10B17ff4d4844"
        },
        "latestTimestamp": {
            "contractId": "0xbEd77dF458715Df69838529694d10B17ff4d4844"
        },
        "latestRound": {
            "contractId": "0xbEd77dF458715Df69838529694d10B17ff4d4844"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xc6E41F023C8dcfEc245A7509b19B5711129B30E3-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xc6E41F023C8dcfEc245A7509b19B5711129B30E3",
        "name": "aud-usd",
        "title": "AUD/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xc6E41F023C8dcfEc245A7509b19B5711129B30E3"
        },
        "latestTimestamp": {
            "contractId": "0xc6E41F023C8dcfEc245A7509b19B5711129B30E3"
        },
        "latestRound": {
            "contractId": "0xc6E41F023C8dcfEc245A7509b19B5711129B30E3"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97",
        "name": "mana-eth",
        "title": "MANA/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97"
        },
        "latestTimestamp": {
            "contractId": "0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97"
        },
        "latestRound": {
            "contractId": "0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xd0e785973390fF8E77a83961efDb4F271E6B8152-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xd0e785973390fF8E77a83961efDb4F271E6B8152",
        "name": "knc-eth",
        "title": "KNC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xd0e785973390fF8E77a83961efDb4F271E6B8152"
        },
        "latestTimestamp": {
            "contractId": "0xd0e785973390fF8E77a83961efDb4F271E6B8152"
        },
        "latestRound": {
            "contractId": "0xd0e785973390fF8E77a83961efDb4F271E6B8152"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xdE54467873c3BCAA76421061036053e371721708-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xdE54467873c3BCAA76421061036053e371721708",
        "name": "usdc-eth",
        "title": "USDC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xdE54467873c3BCAA76421061036053e371721708"
        },
        "latestTimestamp": {
            "contractId": "0xdE54467873c3BCAA76421061036053e371721708"
        },
        "latestRound": {
            "contractId": "0xdE54467873c3BCAA76421061036053e371721708"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6",
        "name": "jpy-usd",
        "title": "JPY/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6"
        },
        "latestTimestamp": {
            "contractId": "0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6"
        },
        "latestRound": {
            "contractId": "0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07",
        "name": "link-eth",
        "title": "LINK/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07"
        },
        "latestTimestamp": {
            "contractId": "0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07"
        },
        "latestRound": {
            "contractId": "0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xefcbc7ddbdB7204Db12CCcB13b7866d96836a81F-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xefcbc7ddbdB7204Db12CCcB13b7866d96836a81F",
        "name": "eth-usd",
        "title": "ETH/USD",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-8,
                "decimals": 2
            },
            "format": "$ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xefcbc7ddbdB7204Db12CCcB13b7866d96836a81F"
        },
        "latestTimestamp": {
            "contractId": "0xefcbc7ddbdB7204Db12CCcB13b7866d96836a81F"
        },
        "latestRound": {
            "contractId": "0xefcbc7ddbdB7204Db12CCcB13b7866d96836a81F"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xfCe812452Cd9C52D4f87B48f3a2EE30777FA0219-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xfCe812452Cd9C52D4f87B48f3a2EE30777FA0219",
        "name": "tusd-eth",
        "title": "TUSD/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xfCe812452Cd9C52D4f87B48f3a2EE30777FA0219"
        },
        "latestTimestamp": {
            "contractId": "0xfCe812452Cd9C52D4f87B48f3a2EE30777FA0219"
        },
        "latestRound": {
            "contractId": "0xfCe812452Cd9C52D4f87B48f3a2EE30777FA0219"
        },
        "getAnswer": {},
        "getTimestamp": {}
    },
    {
        "id": "0xfD52c39640c2359049988e9457C85Eea06b94244-1",
        "networkId": "1",
        "protocol": "chainlink",
        "address": "0xfD52c39640c2359049988e9457C85Eea06b94244",
        "name": "lrc-eth",
        "title": "LRC/ETH",
        "answerRenderOptions": {
            "transform": {
                "multiply": 1e-18,
                "decimals": 7
            },
            "format": "Ξ %(value)s"
        },
        "latestAnswer": {
            "contractId": "0xfD52c39640c2359049988e9457C85Eea06b94244"
        },
        "latestTimestamp": {
            "contractId": "0xfD52c39640c2359049988e9457C85Eea06b94244"
        },
        "latestRound": {
            "contractId": "0xfD52c39640c2359049988e9457C85Eea06b94244"
        },
        "getAnswer": {},
        "getTimestamp": {}
    }
]

export default contracts;