import { FeedTypes } from '../store/types'

export const contracts: Array<FeedTypes.Feed> = [
        {
            name: "btc-usd",
            protocol: "chainlink",
            title: "BTC/USD",
            address: "0xF5fff180082d6017036B771bA883025c654BC935",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "aud-usd",
            title: "AUD/USD",
            address: "0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "eur-usd",
            title: "EUR/USD",
            address: "0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "chf-usd",
            title: "CHF/USD",
            address: "0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            title: "GBP/USD",
            name: "gbp-usd",
            address: "0x151445852B0cfDf6A4CC81440F2AF99176e8AD08",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            title: "JPY/USD",
            name: "jpy-usd",
            address: "0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            title: "Silver",
            name: "xag-usd",
            titleLong: "Silver Spot Price (XAG/USD)",
            address: "0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            titleLong: "Philadelphia Gold and Silver Index (XAU/USD)",
            name: "xau-usd",
            title: "Gold",
            address: "0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            title: "LINK/USD",
            name: 'link-usd',
            address: "0x32dbd3214aC75223e27e575C53944307914F7a90",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "xhv-usd",
            title: "XHV/USD",
            address: "0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "lrc-eth",
            title: "LRC/ETH",
            address: "0x8770Afe90c52Fd117f29192866DE705F63e59407",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "lend-eth",
            title: "LEND/ETH",
            address: "0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "btc-eth",
            title: "BTC/ETH",
            address: "0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "mkr-eth",
            title: "MKR/ETH",
            address: "0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "mana-eth",
            title: "MANA/ETH",
            address: "0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "mnc-eth",
            title: "MNC/ETH",
            address: "0xd0e785973390fF8E77a83961efDb4F271E6B8152",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "link-eth",
            title: "LINK/ETH",
            address: "0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "usdc-eth",
            title: "USDC/ETH",
            address: "0xdE54467873c3BCAA76421061036053e371721708",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "rep-eth",
            title: "REP/ETH",
            address: "0xb8b513d9cf440C1b6f5C7142120d611C94fC220c",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "zrx-eth",
            title: "ZRX/ETH",
            address: "0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "bat-eth",
            title: "BAT/ETH",
            address: "0x9b4e2579895efa2b4765063310Dc4109a7641129",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "dai-eth",
            title: "DAI/ETH",
            address: "0x037E8F2125bF532F3e228991e051c8A7253B642c",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "tusd-eth",
            title: "TUSD/ETH",
            address: "0x73ead35fd6A572EF763B13Be65a9db96f7643577",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "usdt-eth",
            title: "USDT/ETH",
            address: "0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "susd-eth",
            title: "SUSD/ETH",
            address: "0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "snx-eth",
            title: "SNX/ETH",
            address: "0xE23d1142dE4E83C08bb048bcab54d50907390828",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "1"
        },
        {
            protocol: "chainlink",
            name: "ftse",
            titleLong: "FTSE 100 Index (UKX)",
            title: "FTSE 100",
            address: "0x16924ae9C2ac6cdbC9D6bB16FAfCD38BeD560936",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "£ %(value)s"
            },
            networkId: "1",
            "historyRange": 50
        },
        {
            protocol: "chainlink",
            name: "nikkei",
            titleLong: "Nikkei 225 Index (NI225)",
            title: "N225/JPY",
            address: "0x3f6E09A4EC3811765F5b2ad15c0279910dbb2c04",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "¥ %(value)s"
            },
            networkId: "1",
            "historyRange": 50
        },
        {
            "protocol": "chainlink",
            "name": "ampl-eth",
            "title": "AMPL/ETH",
            "address": "0x9a38CdeFd74d72601a6B997024C491Ef7314E11D",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "aud-usd",
            "title": "AUD/USD",
            "address": "0x1c621Aab85F7879690B5407404A097068770b59a",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bat-eth",
            "title": "BAT/ETH",
            "address": "0xAfd8186C962daf599f171B8600f3e19Af7B52c92",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bat-usd",
            "title": "BAT/USD",
            "address": "0x0237f6c4ba705d0352a1a404e7608adddf479570",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bnb-usd",
            "title": "BNB/USD",
            "address": "0x5959AFEE59d3D28bbE5995B506ee17B305096E48",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bnt-usd",
            "title": "BNT/USD",
            "address": "0xed325b49944fB2042204F80B205245D083e4bf01",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "btc-eth",
            "title": "BTC/ETH",
            "address": "0x5b8B87A0abA4be247e660B0e0143bB30Cdf566AF",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "btc-usd",
            "title": "BTC/USD",
            "address": "0x882906a758207FeA9F21e0bb7d2f24E561bd0981",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "busd-eth",
            "title": "BUSD/ETH",
            "address": "0x0A32D96Ff131cd5c3E0E5AAB645BF009Eda61564",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "chf-usd",
            "title": "CHF/USD",
            "address": "0xD49c81796BccAbb5cd804f9d186B5E00E9Ac21fF",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "dai-eth",
            "title": "DAI/ETH",
            "address": "0x64b8e49baDeD7BFb2FD5A9235B2440C0eE02971B",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "dai-usd",
            "title": "DAI/USD",
            "address": "0x017d3880ee52e23dbc5bd8a855d51beae41f5cbb",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "eth-usd",
            "title": "ETH/USD",
            "address": "0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "eur-usd",
            "title": "EUR/USD",
            "address": "0xe95feDE497d0c02a2DBc8e20C5E8bFFE9339F03a",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "ftm-eth",
            "title": "FTM/ETH",
            "address": "0xEFAaDC0dEe4Ff59788D85dD79e8B7576C3Fcc910",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "gbp-usd",
            "title": "GBP/USD",
            "address": "0xa2Dbd50FD09B9572a8A37ED4C2aEE4093A4b3Ef7",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "jpy-usd",
            "title": "JPY/USD",
            "address": "0x8eAeBAF0eA3BC2a160b461703AF409d074CDEC6e",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "knc-eth",
            "title": "KNC/ETH",
            "address": "0x19D97CEb36624a31d827032D8216DD2eB15e9845",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "lend-eth",
            "title": "LEND/ETH",
            "address": "0xf7b4834fe443d1E04D757b4b089b35F5A90F2847",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "link-eth",
            "title": "LINK/ETH",
            "address": "0xb8c99b98913bE2ca4899CdcaF33a3e519C20EeEc",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "link-usd",
            "title": "LINK/USD",
            "address": "0x060b38B197fE60cA5F36EA94452DA7F1bc3c7823",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "link-usdt",
            "title": "LINK/USDT",
            "address": "0xc21c178fE75aAd2017DA25071c54462e26d8face",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "lrc-eth",
            "title": "LRC/ETH",
            "address": "0xc85aA7D7A7EDfaD1D7d3dC41926B732e5C9C2CBA",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "ltc-usd",
            "title": "LTC/USD",
            "address": "0xDEC6bA5a1025117B07596A88CBb2F45dDfEdA250",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "mana-eth",
            "title": "MANA/ETH",
            "address": "0xDab909dedB72573c626481fC98CEE1152b81DEC2",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "mkr-eth",
            "title": "MKR/ETH",
            "address": "0x811B1f727F8F4aE899774B568d2e72916D91F392",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "mkr-usd",
            "title": "MKR/USD",
            "address": "0x4955fec0BCD97d9d83Eef48052E8ff49aeD521a4",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "oil-usd",
            "title": "Oil/USD",
            "address": "0x6ac3AE2492b101D349f288e3A02963157778D7de",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "rep-eth",
            "title": "REP/ETH",
            "address": "0xa949eE9bA80c0F381481f2eaB538bC5547a5aC67",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "rep-usd",
            "title": "REP/USD",
            "address": "0xaaf825b7a1e833f2b79975108a030c76756fdc1a",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "scex-usd (exchange index)",
            "title": "sCEX/USD (Exchange index)",
            "address": "0x16745151a140035208a5B2Ca0441b375Ece29899",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "sdefi-usd (exchange index)",
            "title": "sDEFI/USD (Exchange index)",
            "address": "0x71199172Af06b51c7594Afb0ea9C2D2D3ef13eb8",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "snx-eth",
            "title": "SNX/ETH",
            "address": "0xA95674a8Ed9aa9D2E445eb0024a9aa05ab44f6bf",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "snx-usd",
            "title": "SNX/USD",
            "address": "0xa3c93DC958511dcD2C85a6CC8B007E507Fb3Bb79",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "susd-eth",
            "title": "SUSD/ETH",
            "address": "0xe054B4AeE7AC7645642DD52f1C892Ff0128c98f0",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "sxp-usd",
            "title": "SXP/USD",
            "address": "0x41799e0b9270a461c995e60462740a200ac6c77b",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "trx-usd",
            "title": "TRX/USD",
            "address": "0xeAb37EeEbE57C9E0d734703DAEb8E43373DD079E",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "tusd-eth",
            "title": "TUSD/ETH",
            "address": "0x523AC85618DF56E940534443125eF16DAf785620",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "usdc-eth",
            "title": "USDC/ETH",
            "address": "0xE1480303DDe539E2c241bdC527649F37c9cBef7d",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "usdc-usd",
            "title": "USDC/USD",
            "address": "0x2384742359a5b178bd32a858213680355888c88b",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "usdt-eth",
            "title": "USDT/ETH",
            "address": "0xC08fe0C4D97ccda6B40649c6dA621761b628c288",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xag-usd",
            "title": "XAG/USD",
            "address": "0x42dE9E69B3a5a45600a11D3f37768dffA2846A8A",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xau-usd",
            "title": "XAU/USD",
            "address": "0x2419A5aA4A82a6A18cA9b20Ea2934d7467E6a2cf",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xhv-usd",
            "title": "XHV/USD",
            "address": "0xf8756803b0c1D2dE9ea3d1ED507e4a15e22bd09d",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xrp-usd",
            "title": "XRP/USD",
            "address": "0x9d3425CE0F3766a949e622E535Ce16EDF5098448",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xtz-usd",
            "title": "XTZ/USD",
            "address": "0x0256Fb6c5D26bb867571964A43a300E1770CF038",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "zrx-eth",
            "title": "ZRX/ETH",
            "address": "0x1d0052E4ae5b4AE4563cBAc50Edc3627Ca0460d7",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "zrx-usd",
            "title": "ZRX/USD",
            "address": "0x4236076ba45fffa00678f0008ab76ac79222d7fe",
            "networkId": "3",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "aud-usd",
            "title": "AUD/USD",
            "address": "0xaB1311577E6B96943eA2eB20B7f6C43844436D81",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bat-usd",
            "title": "BAT/USD",
            "address": "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bnb-usd",
            "title": "BNB/USD",
            "address": "0xbAC6B2702AbF4e402cF6f309eAB9B372A5d86e16",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "btc-usd",
            "title": "BTC/USD",
            "address": "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "chf-usd",
            "title": "CHF/USD",
            "address": "0xfFa1969B84670051779aa3aCD2dc350b810D361e",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "dai-usd",
            "title": "DAI/USD",
            "address": "0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "eth-usd",
            "title": "ETH/USD",
            "address": "0x0bF4e7bf3e1f6D6Dc29AA516A33134985cC3A5aA",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "eur-usd",
            "title": "EUR/USD",
            "address": "0x476d86Dfad0AEa4e33Cc728cd5aF0093f059368C",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "gbp-usd",
            "title": "GBP/USD",
            "address": "0x8653242ADcBfD3A2580d81143F2a07c91525F96f",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "jpy-usd",
            "title": "JPY/USD",
            "address": "0x5a7a8F877114bc15C3905D33f3733efe11b8eCb5",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "link-usd",
            "title": "LINK/USD",
            "address": "0x0853E36EeAd0eAA08D61E94237168696383869DD",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "ltc-usd",
            "title": "LTC/USD",
            "address": "0x2b481Dc923Aa050E009113Dca8dcb0daB4B68cDF",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "oil-usd",
            "title": "Oil/USD",
            "address": "0x52Cd2875EF48aE1f672C6A38fd64B803C1a6bc63",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "rep-usd",
            "title": "REP/USD",
            "address": "0xD8fB78dA76c7c9c8c1889EeA6b53967D87BF0A79",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "scex-usd (exchange index)",
            "title": "sCEX/USD (Exchange index)",
            "address": "0xf1723d41573928d49E18525Cc6f4b4b1A55840DC",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "sdefi-usd (exchange index)",
            "title": "sDEFI/USD (Exchange index)",
            "address": "0x886C163df214847f90135630BabC3891F581939b",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "snx-usd",
            "title": "SNX/USD",
            "address": "0x04C50558B5D0ED6cF3210bC14FEa43537E8685ad",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "trx-usd",
            "title": "TRX/USD",
            "address": "0x613265f5A86228c940ca055aEF03403b2DE03f0b",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "usdc-usd",
            "title": "USDC/USD",
            "address": "0x50390D95efcad051B78498A3D7BB3ff8Cd3dbbd7",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xag-usd",
            "title": "XAG/USD",
            "address": "0x43953507c1c393efCd9502AB275D6aEa6aE75aFd",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xau-usd",
            "title": "XAU/USD",
            "address": "0xE16f5B1F03D1db374091ecB915Dfce0b5E1C432c",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xrp-usd",
            "title": "XRP/USD",
            "address": "0x200F1f9C34a6e643c14a5826301b83dB7fF93D0F",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xtz-usd",
            "title": "XTZ/USD",
            "address": "0xBDea0eC6C994298c61Be377Bbd7E4F2a31547158",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "zrx-usd",
            "title": "ZRX/USD",
            "address": "0x4b387f15D803eB6635C37A2B51e0E487c11C3b79",
            "networkId": "4",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "ampl-eth",
            "title": "AMPL/ETH",
            "address": "0x4b387f15D803eB6635C37A2B51e0E487c11C3b79",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "aud-usd",
            "title": "AUD/USD",
            "address": "0xFD4767F2136F277ddd36b563504797C46a2eFF3B",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bat-eth",
            "title": "BAT/ETH",
            "address": "0x2c8d01771CCDca47c103194C5860dbEA2fE61626",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bat-usd",
            "title": "BAT/USD",
            "address": "0x0853E36EeAd0eAA08D61E94237168696383869DD",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "bnb-usd",
            "title": "BNB/USD",
            "address": "0xc3006264638bBB3b8DE19E1296e7933EAC04f65b",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "btc-eth",
            "title": "BTC/ETH",
            "address": "0x33E5085E92f5b53E9A193E28ad2f76bF210550BB",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "btc-usd",
            "title": "BTC/USD",
            "address": "0x2445F2466898565374167859Ae5e3a231e48BB41",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "busd-eth",
            "title": "BUSD/ETH",
            "address": "0x63294A05C9a81b1A40CAD3f2ff30617111630393",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "chf-usd",
            "title": "CHF/USD",
            "address": "0x3a982Ed122bF8e2bee035fCc6CAec894823E0129",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "dai-eth",
            "title": "DAI/ETH",
            "address": "0x6F47077D3B6645Cb6fb7A29D280277EC1e5fFD90",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "dai-usd",
            "title": "DAI/USD",
            "address": "0x7418A1a6E7dA5228c8DcC0eFfd0B68bE27695E9f",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "eth-usd",
            "title": "ETH/USD",
            "address": "0xD21912D8762078598283B14cbA40Cb4bFCb87581",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "eur-usd",
            "title": "EUR/USD",
            "address": "0xf23CCdA8333f658c43E7fC19aa00f6F5722eB225",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "gbp-usd",
            "title": "GBP/USD",
            "address": "0xbcf04560239e5A0D8e497E8215288fF8D25C026e",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "jpy-usd",
            "title": "JPY/USD",
            "address": "0xcd93a652e731Bb38eA9Efc5fEbCf977EDa2a01f7",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "knc-eth",
            "title": "KNC/ETH",
            "address": "0x0893AaF58f62279909F9F6FF2E5642f53342e77F",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "lend-eth",
            "title": "LEND/ETH",
            "address": "0xdCE38940264DfbC01aD1486c21764948e511947e",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "link-eth",
            "title": "LINK/ETH",
            "address": "0xf1e71Afd1459C05A2F898502C4025be755aa844A",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "link-usd",
            "title": "LINK/USD",
            "address": "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "ltc-usd",
            "title": "LTC/USD",
            "address": "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "mana-eth",
            "title": "MANA/ETH",
            "address": "0x3c30c5c415B2410326297F0f65f5Cbb32f3aefCc",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "mkr-eth",
            "title": "MKR/ETH",
            "address": "0x14D7714eC44F44ECD0098B39e642b246fB2c38D0",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "oil-usd",
            "title": "Oil/USD",
            "address": "0x015A38DD4E7C392e5A971c7e436F3bD6D77E645A",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "rep-eth",
            "title": "REP/ETH",
            "address": "0x09F4A94F44c29d4967C761bBdB89f5bD3E2c09E6",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "scex-usd (exchange index)",
            "title": "sCEX/USD (Exchange index)",
            "address": "0xA602bC9609D82Da593aB072974BB132BE869B7a7",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "sdefi-usd (exchange index)",
            "title": "sDEFI/USD (Exchange index)",
            "address": "0x426eD6e87FAFa5A4201E5ca00435EFaBA99fFdB1",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "snx-eth",
            "title": "SNX/ETH",
            "address": "0x775E76cca1B5bc903c9a8C6f77416A35E5744664",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "snx-usd",
            "title": "SNX/USD",
            "address": "0xF2C6D3B7d2435D28a2DC973f320ECF581C92a41F",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "susd-eth",
            "title": "SUSD/ETH",
            "address": "0xa353F8b083F7575cfec443b5ad585D42f652E9F7",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "trx-usd",
            "title": "TRX/USD",
            "address": "0xc9FBeC53445C3C893aD032B878405E4064f69403",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "tusd-eth",
            "title": "TUSD/ETH",
            "address": "0x02424c54D78D48179Fd12ebFfB11c16f9CA984Ad",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "usdc-eth",
            "title": "USDC/ETH",
            "address": "0x672c1C0d1130912D83664011E7960a42E8cA05D5",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "usdt-eth",
            "title": "USDT/ETH",
            "address": "0xCC833A6522721B3252e7578c5BCAF65738B75Fc3",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xag-usd",
            "title": "XAG/USD",
            "address": "0x2447890E8b99f180e7BfA3386342CeA8EeDC64A3",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xau-usd",
            "title": "XAU/USD",
            "address": "0xF1302340da93EdEF6DA03C66bc52F75A956e482C",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xrp-usd",
            "title": "XRP/USD",
            "address": "0xaF5F268198929283927a9a427C62772D0d9dFc00",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "xtz-usd",
            "title": "XTZ/USD",
            "address": "0xDbdB32b0623EEFB75D8D269A99e54512A4683279",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-8,
                    "decimals": 2
                },
                "format": "$ %(value)s"
            }
        },
        {
            "protocol": "chainlink",
            "name": "zrx-eth",
            "title": "ZRX/ETH",
            "address": "0x2636cfdDB457a6C7A7D60A439F1E5a5a0C3d9c65",
            "networkId": "42",
            "answerRenderOptions": {
                "transform": {
                    "multiply": 1e-18,
                    "decimals": 7
                },
                "format": "Ξ %(value)s"
            }
        }
    ]
    /*
    "vulcan": [
        {
            protocol: "vulcan",
            "from": "BTC",
            "to": "USD",
            "times": 100000000,
            address: "0x6909337A49e831CF7De4A4842eD2384A5C39Cc4a",
            "cronJobId": "c1fa59786ee645dbb934a588b0766641",
            "jobId": "ef2d11f7da774d528c174f97957f9ea6",
            
            title: "BTC/USD",
            "navTitle": "BTC/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "1"
        },
        {
            title: "Nikkei 225 Index (NI225)",
            "navTitle": "N225/JPY",
            address: "0x6909337a49e831cf7de4a4842ed2384a5c39cc4a",
            
            "cronJobId": "c1fa59786ee645dbb934a588b0766641",
            "jobId": "ef2d11f7da774d528c174f97957f9ea6",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "¥ %(value)s"
            },
            networkId: "1",
            "historyRange": 50
        },
    ],
    "covid-19": [
        {
            protocol: "vulcan",
            title: "COVID-19 (China)",
            address: "0x8DCD39e5deF7bb50E1840e30662B3225A98C6220",
            
            answerRenderOptions: {
                format: "%(value)s Cases"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            title: "COVID-19 (Italy)",
            address: "0x2f4A30ddc1FE8D1F2Ea0a2F4735BEcCF85C16C2f",
            
            answerRenderOptions: {
                format: "%(value)s Cases"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            title: "COVID-19 (France)",
            address: "0x49ba496eE2c02d12DAB90Df89282222a1c43F1b1",
            
            answerRenderOptions: {
                format: "%(value)s Cases"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            title: "COVID-19 (US)",
            address: "0x01456dce7730a60b83a0bb767f9e29ac9a0e6353",
            
            answerRenderOptions: {
                format: "%(value)s Cases"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            title: "COVID-19 (UK)",
            address: "0xe61488faa89023b50b06c9fa9bd76ddd61d1d7ee",
            
            answerRenderOptions: {
                format: "%(value)s Cases"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            title: "COVID-19 (Australia)",
            address: "0x9b952670c4378672c758bff6055c6cb3a0df8727",
            
            answerRenderOptions: {
                format: "%(value)s Cases"
            },
            networkId: "3",
            "historyRange": 35
        }
    ],
    "markets-us": [
        {
            protocol: "vulcan",
            title: "S&P500 Index (SPX)",
            "navTitle": "S&P500",
            address: "0x03d4D4ade00C3aaA5234E9573c0Ac1f3f2565EC3",
            
            answerRenderOptions: {
                transform: {
                    multiply: 1e-4,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3",
            "historyRange": 35
        },
        {
            protocol: "vulcan",
            title: "Dow Jones Industrial Average (DJI)",
            "navTitle": "Dow Jones",
            address: "0xee22292C4D89fb112B5E749cc1Af70CFa9a9B9b0",
            
            answerRenderOptions: {
                transform: {
                    multiply: 1e-4,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3",
            "historyRange": 35
        },
        {
            protocol: "vulcan",
            title: "Tesla Inc (TSLA)",
            "navTitle": "Tesla",
            address: "0xaE1cC1581D57b3ba9d2a0DDB18CcD1a4D1Fd6420",
            
            answerRenderOptions: {
                transform: {
                    multiply: 1e-4,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3",
            "historyRange": 20
        }
    ],
    "markets-eu": [],
    "vulcan-usd": [
        {
            protocol: "vulcan",
            "from": "BTC",
            "to": "USD",
            "times": 100000000,
            address: "0x544002DB956cA8dDAa6245c31Cb75696dB130083",
            "cronJobId": "1db52096d7d94348a4208c8a9ced3e79",
            "jobId": "1c6604fdd2ea4d05accc91d3b12de083",
            
            title: "BTC/USD",
            "navTitle": "BTC/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "ETH",
            "to": "USD",
            "times": 100000000,
            address: "0x93cB75F119eBaA61cbF6d7CE603EB1BeE6765bC6",
            "cronJobId": "6b44c33099e44eb693a4fb726923bdec",
            "jobId": "6d2adf48d9a745789ba43e3a7070a806",
            
            title: "ETH/USD",
            "navTitle": "ETH/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "AUD",
            "to": "USD",
            "times": 100000000,
            address: "0x620B22f20D623027B49BFc4E91d86f159FA5Bdd5",
            "jobId": "beef456ba2084d7f8e4e1239667ec4ab",
            "cronJobId": "3eaceef5690d451593ac90a6bfda2eb2",
            
            title: "AUD/USD",
            "navTitle": "AUD/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "EUR",
            "to": "USD",
            "times": 100000000,
            address: "0x1F51cbfFa16dafb2a791A4E0E568F7939f28DBCF",
            "cronJobId": "88a88d2f902940a4b44ebd0be9cca8f0",
            "jobId": "5d6d053ad90a47df9d52d09e98999de7",
            
            title: "EUR/USD",
            "navTitle": "EUR/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "CHF",
            "to": "USD",
            "times": 100000000,
            address: "0x7C9922A18B6Ef682762c11Fb163C0415112DB730",
            "cronJobId": "2f15db35474b4713b3bb2633db24f926",
            "jobId": "c4aa5b3c49234736944bc65565cc13cd",
            
            title: "CHF/USD",
            "navTitle": "CHF/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "GBP",
            "to": "USD",
            "times": 100000000,
            address: "0x87b06C3fba89b2d033F6be71c3706705D2969BB8",
            "cronJobId": "db640e5af2754e919a63517e3657c0d1",
            "jobId": "a489d4efde8b4dd997d1c77cd9ee6804",
            
            title: "GBP/USD",
            "navTitle": "GBP/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "JPY",
            "to": "USD",
            "times": 100000000,
            address: "0x96A340993fD6afe68573D6d984e0E3301Cd079C9",
            "cronJobId": "a677056b34624dde8d4db930f1e66a48",
            "jobId": "5358227b541d4df48e8656352ce5291f",
            
            title: "JPY/USD",
            "navTitle": "JPY/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "XAG",
            "to": "USD",
            "times": 100000000,
            address: "0xa811fd2620EDA69F5a6958f4e022aDFE8414adB6",
            "cronJobId": "5b6c27d4c70a4cad99e35bf805962b77",
            "jobId": "b89e65a3ccb342bfb61afbcaf2f7a9db",
            
            title: "XAG/USD",
            "navTitle": "XAG/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "XAU",
            "to": "USD",
            "times": 100000000,
            address: "0x8DC2EcA2442910953fe70B3c573AAe4711896B00",
            "cronJobId": "60c69bc9ebf04b0293295e13d07e7d4b",
            "jobId": "09e766a70e4f4fd7b9c73de9f9678dd8",
            
            title: "XAU/USD",
            "navTitle": "XAU/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "LINK",
            "to": "USD",
            "times": 100000000,
            address: "0xDD28b1106468b1dF899341875C2Bfb759758514f",
            "cronJobId": "ea8584f640544cd8958f891e4cf4ae56",
            "jobId": "f955a334ff25456e87db1f5a4fa86d8d",
            
            title: "LINK/USD",
            "navTitle": "LINK/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "XHV",
            "to": "USD",
            "times": 100000000,
            address: "0x41F1eE52252E53a1981dB8be075cA9a9DC5E2dD7",
            "cronJobId": "d210ca59f6c244d2b6e336aa3dfe2d9c",
            "jobId": "4a9465cff6a04055843f95355e5a10ce",
            
            title: "XHV/USD",
            "navTitle": "XHV/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-8,
                    decimals: 2
                },
                format: "$ %(value)s"
            },
            networkId: "3"
        }
    ],
    "vulcan-eth": [
        {
            protocol: "vulcan",
            "from": "LRC",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xc284719E132732724774be8B7D48E4125983e5eE",
            "cronJobId": "b7c939e9a93f4959bcd1d04bc159b9e0",
            "jobId": "a5f9ebac66c849f3a6341a8d8b489059",
            
            title: "LRC/USD",
            "navTitle": "LRC/USD",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "LEND",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x552Be20CDB005E9CFC9C195229002F0c30f6C64A",
            "cronJobId": "5f27b14d53c24c3ab8cff1fa839437e5",
            "jobId": "6b57f2de24dc45e69be97f9f55448b01",
            
            title: "LEND/ETH",
            "navTitle": "LEND/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "BTC",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xCf2e15e00b9D3EB4B91bece90F68d119D2BE0E8e",
            "cronJobId": "cbfbcd09e8c74036a4d8ba46006990fb",
            "jobId": "28a96ef8d162491fb4fee51278a911e0",
            
            title: "BTC/ETH",
            "navTitle": "BTC/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "MKR",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xAd5dAa6056c994afe09254aEe0Cd6A9cE71412Fe",
            "cronJobId": "cf87c36df5ee485fb9a54e8491370c7d",
            "jobId": "7ef67b613739476b82100050a6354a11",
            
            title: "MKR/ETH",
            "navTitle": "MKR/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "MANA",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x3A4a22C101162e18037B4aD2F6CfDCB4D2D78AFa",
            "cronJobId": "50f2777b50a549a18d839c237e68124c",
            "jobId": "2135837a0f5d45a48e0fa04026d880d6",
            
            title: "MANA/ETH",
            "navTitle": "MANA/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "KNC",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x1df524b50A7Fa83C46906337A368C4542FB51558",
            "cronJobId": "e59f1681d64849f4b8c8b8372f81d8dc",
            "jobId": "d9a5e379693444c695afb140493e0ea2",
            
            title: "KNC/ETH",
            "navTitle": "KNC/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "LINK",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x245fDAAD3f9694f522b372E614a3B3EaA49AD6A4",
            "cronJobId": "8f0c7e77dede4855be134b8196ddc106",
            "jobId": "3ef0ea1c7b4c4615b2c5a9907eb6dcc6",
            
            title: "LINK/ETH",
            "navTitle": "LINK/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "USDC",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x8F630190232783d1d11AaD216102301f48FA2777",
            "cronJobId": "db0ab679d18848f785f37af075bd3954",
            "jobId": "667817cc4c2b46419f6e8898a679a757",
            
            title: "USDC/ETH",
            "navTitle": "USDC/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "REP",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xC032D2A98b68B4a9fc65e25Af4C03D6f95B0D120",
            "cronJobId": "abcea2bcc1384e84bccd8eb8fd043bf9",
            "jobId": "dbf1b89cc7204db8b14139736aa7dc92",
            
            title: "REP/ETH",
            "navTitle": "REP/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",

            "from": "ZRX",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xdACB1014763127a046bdB4bfb925A2A3584D251B",
            "cronJobId": "41915c87ac904f9ea15bbbacc738d254",
            "jobId": "88c85720851641bab6a5145c7f5dd6a2",
            
            title: "ZRX/ETH",
            "navTitle": "ZRX/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "BAT",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xb98B7ee1E39Df6E3d6aCcf3670Bd0b2FBC432407",
            "jobId": "b55bb61aaaa14002886154c90e95b952",
            "cronJobId": "dd64d368d90a44fba1ae50dddbedf962",
            
            title: "BAT/ETH",
            "navTitle": "BAT/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "DAI",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x181507fcD6aCA0BbEf235d3874a004F02087ec40",
            "cronJobId": "2ec41c81d2c94c5887add257da34dac8",
            "jobId": "4305d356375243c59156558aaabc48f5",
            
            title: "DAI/ETH",
            "navTitle": "DAI/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "TUSD",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xE3EA3a692D5D1f9937929D36C080Ca04128faD0F",
            "cronJobId": "29439245c31d47f89971064bf9104056",
            "jobId": "3973e4618dd142528072a09a9c00e75e",
            
            title: "TUSD/ETH",
            "navTitle": "TUSD/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "USDT",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xA1d11b0fDeB87218C668eacEB76b529020ABc75c",
            "cronJobId": "06ac8cbf67cb48c5a0127c548d2ff0d3",
            "jobId": "5e20d4bb069143b2a852663e37299f2d",
            
            title: "USDT/ETH",
            "navTitle": "USDT/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "BUSD",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x05AB950E866fc7a4872ef9Fca07740758bf03525",
            "cronJobId": "49d6742a312a4736a94427db7729eecf",
            "jobId": "6090ca61c2404854b07deca425e382e9",
            
            title: "BUSD/ETH",
            "navTitle": "BUSD/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",
            "from": "SUSD",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0xb0C3658a4854F4bB3485444b402a91785e51EAaD",
            "cronJobId": "13e0fa67ee284e0f949a8ac5fe972a32",
            "jobId": "02f052bf29ee41c998922bd2f6122b92",
            
            title: "SUSD/ETH",
            "navTitle": "SUSD/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        },
        {
            protocol: "vulcan",

            "from": "SNX",
            "to": "ETH",
            "times": 1000000000000000000,
            address: "0x427ec51E8C33d3f0F4c435A21690cd21d13E262d",
            "cronJobId": "8728b861adbc42e189b6a4d8efe5dcca",
            "jobId": "f33b7f90d0dd4bae8c86c5888e4c837d",
            
            title: "SNX/ETH",
            "navTitle": "SNX/ETH",
            answerRenderOptions: {
                transform: {
                    multiply: 1e-18,
                    decimals: 7
                },
                format: "Ξ %(value)s"
            },
            networkId: "3"
        }
    ]
    */