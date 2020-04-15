export const categories = [
    { title: 'Chainlink USD Pairs', path: 'usd' },
    { title: 'Chainlink ETH Pairs', path: 'eth' },
    { title: 'Chainlink Markets', path: 'markets' },
    { title: 'Vulcan Mainnet', path: 'vulcan' },
    { title: 'COVID-19 Cases', path: 'covid-19' },
    { title: 'Vulcan US Markets', path: 'markets-us' },
    { title: 'Vulcan EU Markets', path: 'markets-eu' },
    { title: 'Vulcan USD Pairs', path: 'vulcan-usd' },
    { title: 'Vulcan ETH Pairs', path: 'vulcan-eth' },
]

export const contracts = {
    "usd": [
        {
            "title": "BTC/USD",
            "navTitle": "BTC/USD",
            "address": "0xF5fff180082d6017036B771bA883025c654BC935",
            "path": "usd/btc-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "AUD/USD",
            "address": "0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231",
            "path": "usd/aud-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "EUR/USD",
            "address": "0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5",
            "path": "usd/eur-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "CHF/USD",
            "address": "0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec",
            "path": "usd/chf-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "GBP/USD",
            "address": "0x151445852B0cfDf6A4CC81440F2AF99176e8AD08",
            "path": "usd/gbp-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "JPY/USD",
            "address": "0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6",
            "path": "usd/jpy-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "Silver Spot Price (XAG/USD)",
            "navTitle": "XAG/USD (Silver)",
            "address": "0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B",
            "path": "usd/xag-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "Philadelphia Gold and Silver Index (XAU/USD)",
            "navTitle": "XAU/USD (Gold)",
            "address": "0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935",
            "path": "usd/xau-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "LINK/USD",
            "address": "0x32dbd3214aC75223e27e575C53944307914F7a90",
            "path": "usd/link-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "XHV/USD",
            "address": "0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94",
            "path": "usd/xhv-usd",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        }
    ],
    "eth": [
        {
            "title": "LRC/ETH",
            "address": "0x8770Afe90c52Fd117f29192866DE705F63e59407",
            "path": "eth/lrc-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "LEND/ETH",
            "address": "0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327",
            "path": "eth/lend-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "BTC/ETH",
            "address": "0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c",
            "path": "eth/btc-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "MKR/ETH",
            "address": "0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3",
            "path": "eth/mkr-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "MANA/ETH",
            "address": "0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97",
            "path": "eth/mana-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "MNC/ETH",
            "address": "0xd0e785973390fF8E77a83961efDb4F271E6B8152",
            "path": "eth/knc-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "LINK/ETH",
            "address": "0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07",
            "path": "eth/link-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "USDC/ETH",
            "address": "0xdE54467873c3BCAA76421061036053e371721708",
            "path": "eth/usdc-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "REP/ETH",
            "address": "0xb8b513d9cf440C1b6f5C7142120d611C94fC220c",
            "path": "eth/rep-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "ZRX/ETH",
            "address": "0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8",
            "path": "eth/zrx-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "BAT/ETH",
            "address": "0x9b4e2579895efa2b4765063310Dc4109a7641129",
            "path": "eth/bat-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "DAI/ETH",
            "address": "0x037E8F2125bF532F3e228991e051c8A7253B642c",
            "path": "eth/dai-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "TUSD/ETH",
            "address": "0x73ead35fd6A572EF763B13Be65a9db96f7643577",
            "path": "eth/tusd-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "USDT/ETH",
            "address": "0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE",
            "path": "eth/usdt-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "SUSD/ETH",
            "address": "0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea",
            "path": "eth/susd-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        },
        {
            "title": "SNX/ETH",
            "address": "0xE23d1142dE4E83C08bb048bcab54d50907390828",
            "path": "eth/snx-eth",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "1"
        }
    ],
    "markets": [
        {
            "title": "FTSE 100 Index (UKX)",
            "navTitle": "FTSE/GBP",
            "address": "0x16924ae9C2ac6cdbC9D6bB16FAfCD38BeD560936",
            "path": "markets/ftse",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "£ %(value)s"
            },
            "networkId": "1",
            "historyRange": 50
        },
        {
            "title": "Nikkei 225 Index (NI225)",
            "navTitle": "N225/JPY",
            "address": "0x3f6E09A4EC3811765F5b2ad15c0279910dbb2c04",
            "path": "markets/nikkei",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "¥ %(value)s"
            },
            "networkId": "1",
            "historyRange": 50
        },
    ],
    "vulcan": [
        {
            "from": "BTC",
            "to": "USD",
            "times": 100000000,
            "address": "0x6909337A49e831CF7De4A4842eD2384A5C39Cc4a",
            "cronJobId": "c1fa59786ee645dbb934a588b0766641",
            "jobId": "ef2d11f7da774d528c174f97957f9ea6",
            "path": "vulcan/btc-usd",
            "title": "BTC/USD",
            "navTitle": "BTC/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "1"
        },
        /*
        {
            "title": "Nikkei 225 Index (NI225)",
            "navTitle": "N225/JPY",
            "address": "0x6909337a49e831cf7de4a4842ed2384a5c39cc4a",
            "path": "vulcan/nikkei",
            "cronJobId": "c1fa59786ee645dbb934a588b0766641",
            "jobId": "ef2d11f7da774d528c174f97957f9ea6",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "¥ %(value)s"
            },
            "networkId": "1",
            "historyRange": 50
        },*/
    ],
    "covid-19": [
        {
            "title": "COVID-19 (China)",
            "address": "0x8DCD39e5deF7bb50E1840e30662B3225A98C6220",
            "path": "covid-19/china",
            "answerRenderOptions": {
                "format": "%(value)s Cases"
            },
            "networkId": "3"
        },
        {
            "title": "COVID-19 (Italy)",
            "address": "0x2f4A30ddc1FE8D1F2Ea0a2F4735BEcCF85C16C2f",
            "path": "covid-19/italy",
            "answerRenderOptions": {
                "format": "%(value)s Cases"
            },
            "networkId": "3"
        },
        {
            "title": "COVID-19 (France)",
            "address": "0x49ba496eE2c02d12DAB90Df89282222a1c43F1b1",
            "path": "covid-19/france",
            "answerRenderOptions": {
                "format": "%(value)s Cases"
            },
            "networkId": "3"
        },
        {
            "title": "COVID-19 (US)",
            "address": "0x01456dce7730a60b83a0bb767f9e29ac9a0e6353",
            "path": "covid-19/us",
            "answerRenderOptions": {
                "format": "%(value)s Cases"
            },
            "networkId": "3"
        },
        {
            "title": "COVID-19 (UK)",
            "address": "0xe61488faa89023b50b06c9fa9bd76ddd61d1d7ee",
            "path": "covid-19/uk",
            "answerRenderOptions": {
                "format": "%(value)s Cases"
            },
            "networkId": "3"
        },
        {
            "title": "COVID-19 (Australia)",
            "address": "0x9b952670c4378672c758bff6055c6cb3a0df8727",
            "path": "covid-19/australia",
            "answerRenderOptions": {
                "format": "%(value)s Cases"
            },
            "networkId": "3",
            "historyRange": 35
        }
    ],
    "markets-us": [
        {
            "title": "S&P500 Index (SPX)",
            "navTitle": "S&P500",
            "address": "0x03d4D4ade00C3aaA5234E9573c0Ac1f3f2565EC3",
            "path": "markets-us/spx",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-4,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3",
            "historyRange": 35
        },
        {
            "title": "Dow Jones Industrial Average (DJI)",
            "navTitle": "Dow Jones",
            "address": "0xee22292C4D89fb112B5E749cc1Af70CFa9a9B9b0",
            "path": "markets-us/dji",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-4,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3",
            "historyRange": 35
        },
        {
            "title": "Tesla Inc (TSLA)",
            "navTitle": "Tesla",
            "address": "0xaE1cC1581D57b3ba9d2a0DDB18CcD1a4D1Fd6420",
            "path": "markets-us/tesla",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-4,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3",
            "historyRange": 20
        }
    ],
    "markets-eu": [],
    "vulcan-usd": [
        {
            "from": "BTC",
            "to": "USD",
            "times": 100000000,
            "address": "0x544002DB956cA8dDAa6245c31Cb75696dB130083",
            "cronJobId": "1db52096d7d94348a4208c8a9ced3e79",
            "jobId": "1c6604fdd2ea4d05accc91d3b12de083",
            "path": "vulcan-usd/btc-usd",
            "title": "BTC/USD",
            "navTitle": "BTC/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "ETH",
            "to": "USD",
            "times": 100000000,
            "address": "0x93cB75F119eBaA61cbF6d7CE603EB1BeE6765bC6",
            "cronJobId": "6b44c33099e44eb693a4fb726923bdec",
            "jobId": "6d2adf48d9a745789ba43e3a7070a806",
            "path": "vulcan-usd/eth-usd",
            "title": "ETH/USD",
            "navTitle": "ETH/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "AUD",
            "to": "USD",
            "times": 100000000,
            "address": "0x620B22f20D623027B49BFc4E91d86f159FA5Bdd5",
            "jobId": "beef456ba2084d7f8e4e1239667ec4ab",
            "cronJobId": "3eaceef5690d451593ac90a6bfda2eb2",
            "path": "vulcan-usd/aud-usd",
            "title": "AUD/USD",
            "navTitle": "AUD/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "EUR",
            "to": "USD",
            "times": 100000000,
            "address": "0x1F51cbfFa16dafb2a791A4E0E568F7939f28DBCF",
            "cronJobId": "88a88d2f902940a4b44ebd0be9cca8f0",
            "jobId": "5d6d053ad90a47df9d52d09e98999de7",
            "path": "vulcan-usd/eur-usd",
            "title": "EUR/USD",
            "navTitle": "EUR/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "CHF",
            "to": "USD",
            "times": 100000000,
            "address": "0x7C9922A18B6Ef682762c11Fb163C0415112DB730",
            "cronJobId": "2f15db35474b4713b3bb2633db24f926",
            "jobId": "c4aa5b3c49234736944bc65565cc13cd",
            "path": "vulcan-usd/chf-usd",
            "title": "CHF/USD",
            "navTitle": "CHF/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "GBP",
            "to": "USD",
            "times": 100000000,
            "address": "0x87b06C3fba89b2d033F6be71c3706705D2969BB8",
            "cronJobId": "db640e5af2754e919a63517e3657c0d1",
            "jobId": "a489d4efde8b4dd997d1c77cd9ee6804",
            "path": "vulcan-usd/gbp-usd",
            "title": "GBP/USD",
            "navTitle": "GBP/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "JPY",
            "to": "USD",
            "times": 100000000,
            "address": "0x96A340993fD6afe68573D6d984e0E3301Cd079C9",
            "cronJobId": "a677056b34624dde8d4db930f1e66a48",
            "jobId": "5358227b541d4df48e8656352ce5291f",
            "path": "vulcan-usd/jpy-usd",
            "title": "JPY/USD",
            "navTitle": "JPY/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "XAG",
            "to": "USD",
            "times": 100000000,
            "address": "0xa811fd2620EDA69F5a6958f4e022aDFE8414adB6",
            "cronJobId": "5b6c27d4c70a4cad99e35bf805962b77",
            "jobId": "b89e65a3ccb342bfb61afbcaf2f7a9db",
            "path": "vulcan-usd/xag-usd",
            "title": "XAG/USD",
            "navTitle": "XAG/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "XAU",
            "to": "USD",
            "times": 100000000,
            "address": "0x8DC2EcA2442910953fe70B3c573AAe4711896B00",
            "cronJobId": "60c69bc9ebf04b0293295e13d07e7d4b",
            "jobId": "09e766a70e4f4fd7b9c73de9f9678dd8",
            "path": "vulcan-usd/xau-usd",
            "title": "XAU/USD",
            "navTitle": "XAU/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "LINK",
            "to": "USD",
            "times": 100000000,
            "address": "0xDD28b1106468b1dF899341875C2Bfb759758514f",
            "cronJobId": "ea8584f640544cd8958f891e4cf4ae56",
            "jobId": "f955a334ff25456e87db1f5a4fa86d8d",
            "path": "vulcan-usd/link-usd",
            "title": "LINK/USD",
            "navTitle": "LINK/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "XHV",
            "to": "USD",
            "times": 100000000,
            "address": "0x41F1eE52252E53a1981dB8be075cA9a9DC5E2dD7",
            "cronJobId": "d210ca59f6c244d2b6e336aa3dfe2d9c",
            "jobId": "4a9465cff6a04055843f95355e5a10ce",
            "path": "vulcan-usd/xhv-usd",
            "title": "XHV/USD",
            "navTitle": "XHV/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            },
            "networkId": "3"
        }
    ],
    "vulcan-eth": [
        {
            "from": "LRC",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xc284719E132732724774be8B7D48E4125983e5eE",
            "cronJobId": "b7c939e9a93f4959bcd1d04bc159b9e0",
            "jobId": "a5f9ebac66c849f3a6341a8d8b489059",
            "path": "vulcan-usd/lrc-usd",
            "title": "LRC/USD",
            "navTitle": "LRC/USD",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "LEND",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x552Be20CDB005E9CFC9C195229002F0c30f6C64A",
            "cronJobId": "5f27b14d53c24c3ab8cff1fa839437e5",
            "jobId": "6b57f2de24dc45e69be97f9f55448b01",
            "path": "vulcan-eth/lend-eth",
            "title": "LEND/ETH",
            "navTitle": "LEND/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "BTC",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xCf2e15e00b9D3EB4B91bece90F68d119D2BE0E8e",
            "cronJobId": "cbfbcd09e8c74036a4d8ba46006990fb",
            "jobId": "28a96ef8d162491fb4fee51278a911e0",
            "path": "vulcan-eth/btc-eth",
            "title": "BTC/ETH",
            "navTitle": "BTC/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "MKR",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xAd5dAa6056c994afe09254aEe0Cd6A9cE71412Fe",
            "cronJobId": "cf87c36df5ee485fb9a54e8491370c7d",
            "jobId": "7ef67b613739476b82100050a6354a11",
            "path": "vulcan-eth/mkr-eth",
            "title": "MKR/ETH",
            "navTitle": "MKR/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "MANA",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x3A4a22C101162e18037B4aD2F6CfDCB4D2D78AFa",
            "cronJobId": "50f2777b50a549a18d839c237e68124c",
            "jobId": "2135837a0f5d45a48e0fa04026d880d6",
            "path": "vulcan-eth/mana-eth",
            "title": "MANA/ETH",
            "navTitle": "MANA/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "KNC",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x1df524b50A7Fa83C46906337A368C4542FB51558",
            "cronJobId": "e59f1681d64849f4b8c8b8372f81d8dc",
            "jobId": "d9a5e379693444c695afb140493e0ea2",
            "path": "vulcan-eth/knc-eth",
            "title": "KNC/ETH",
            "navTitle": "KNC/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "LINK",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x245fDAAD3f9694f522b372E614a3B3EaA49AD6A4",
            "cronJobId": "8f0c7e77dede4855be134b8196ddc106",
            "jobId": "3ef0ea1c7b4c4615b2c5a9907eb6dcc6",
            "path": "vulcan-eth/link-eth",
            "title": "LINK/ETH",
            "navTitle": "LINK/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "USDC",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x8F630190232783d1d11AaD216102301f48FA2777",
            "cronJobId": "db0ab679d18848f785f37af075bd3954",
            "jobId": "667817cc4c2b46419f6e8898a679a757",
            "path": "vulcan-eth/usdc-eth",
            "title": "USDC/ETH",
            "navTitle": "USDC/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "REP",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xC032D2A98b68B4a9fc65e25Af4C03D6f95B0D120",
            "cronJobId": "abcea2bcc1384e84bccd8eb8fd043bf9",
            "jobId": "dbf1b89cc7204db8b14139736aa7dc92",
            "path": "vulcan-eth/rep-eth",
            "title": "REP/ETH",
            "navTitle": "REP/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "ZRX",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xdACB1014763127a046bdB4bfb925A2A3584D251B",
            "cronJobId": "41915c87ac904f9ea15bbbacc738d254",
            "jobId": "88c85720851641bab6a5145c7f5dd6a2",
            "path": "vulcan-eth/zrx-eth",
            "title": "ZRX/ETH",
            "navTitle": "ZRX/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "BAT",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xb98B7ee1E39Df6E3d6aCcf3670Bd0b2FBC432407",
            "jobId": "b55bb61aaaa14002886154c90e95b952",
            "cronJobId": "dd64d368d90a44fba1ae50dddbedf962",
            "path": "vulcan-eth/bat-eth",
            "title": "BAT/ETH",
            "navTitle": "BAT/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "DAI",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x181507fcD6aCA0BbEf235d3874a004F02087ec40",
            "cronJobId": "2ec41c81d2c94c5887add257da34dac8",
            "jobId": "4305d356375243c59156558aaabc48f5",
            "path": "vulcan-eth/dai-eth",
            "title": "DAI/ETH",
            "navTitle": "DAI/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "TUSD",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xE3EA3a692D5D1f9937929D36C080Ca04128faD0F",
            "cronJobId": "29439245c31d47f89971064bf9104056",
            "jobId": "3973e4618dd142528072a09a9c00e75e",
            "path": "vulcan-eth/tusd-eth",
            "title": "TUSD/ETH",
            "navTitle": "TUSD/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "USDT",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xA1d11b0fDeB87218C668eacEB76b529020ABc75c",
            "cronJobId": "06ac8cbf67cb48c5a0127c548d2ff0d3",
            "jobId": "5e20d4bb069143b2a852663e37299f2d",
            "path": "vulcan-eth/usdt-eth",
            "title": "USDT/ETH",
            "navTitle": "USDT/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "BUSD",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x05AB950E866fc7a4872ef9Fca07740758bf03525",
            "cronJobId": "49d6742a312a4736a94427db7729eecf",
            "jobId": "6090ca61c2404854b07deca425e382e9",
            "path": "vulcan-eth/busd-eth",
            "title": "BUSD/ETH",
            "navTitle": "BUSD/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "SUSD",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0xb0C3658a4854F4bB3485444b402a91785e51EAaD",
            "cronJobId": "13e0fa67ee284e0f949a8ac5fe972a32",
            "jobId": "02f052bf29ee41c998922bd2f6122b92",
            "path": "vulcan-eth/susd-eth",
            "title": "SUSD/ETH",
            "navTitle": "SUSD/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        },
        {
            "from": "SNX",
            "to": "ETH",
            "times": 1000000000000000000,
            "address": "0x427ec51E8C33d3f0F4c435A21690cd21d13E262d",
            "cronJobId": "8728b861adbc42e189b6a4d8efe5dcca",
            "jobId": "f33b7f90d0dd4bae8c86c5888e4c837d",
            "path": "vulcan-eth/snx-eth",
            "title": "SNX/ETH",
            "navTitle": "SNX/ETH",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            },
            "networkId": "3"
        }
    ]
}
