export const categories = [
    { name: 'USD', title: 'USD Pairs', path: 'usd' },
    { name: 'ETH', title: 'ETH Pairs', path: 'eth' },
    { name: 'COVID-19', title: 'COVID-19 Cases', path: 'covid-19' }
]

export const contracts = {
    /*
    'ETHUSD': {
        count: 21,
        address: '0x79fEbF6B9F76853EDBcBc913e6aAE8232cFB9De9'
    },
    */
    'BTCUSD': {
        name: 'BTCUSD',
        count: 21,
        address: '0xF5fff180082d6017036B771bA883025c654BC935',
        path: 'usd/btc-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'AUDUSD': {
        count: 9,
        address: '0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231',
        path: 'usd/aud-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'EURUSD': {
        count: 9,
        address: '0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5',
        path: 'usd/eur-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'CHFUSD': {
        count: 9,
        address: '0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec',
        path: 'usd/chf-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'GBPUSD': {
        count: 9,
        address: '0x151445852B0cfDf6A4CC81440F2AF99176e8AD08',
        path: 'usd/gbp-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'JPYUSD': {
        count: 9,
        address: '0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6',
        path: 'usd/jpy-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'XAGUSD': {
        count: 9,
        address: '0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B',
        path: 'usd/xag-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'XAUUSD': {
        count: 9,
        address: '0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935',
        path: 'usd/xau-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'LINKUSD': {
        count: 8,
        address: '0x32dbd3214aC75223e27e575C53944307914F7a90',
        path: 'usd/link-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'XHVUSD': {
        count: 7,
        address: '0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94',
        path: 'usd/xhv-usd',
        answerRender: (value) => `$ ${((value || 0) * 1e-8).toFixed(2)}`
    },
    'LRCETH': {
        count: 7,
        address: '0x8770Afe90c52Fd117f29192866DE705F63e59407',
        path: 'eth/lrc-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'LENDETH': {
        count: 8,
        address: '0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327',
        path: 'eth/lend-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'BTCETH': {
        count: 9,
        address: '0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c',
        path: 'eth/btc-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'MKRETH': {
        count: 7,
        address: '0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3',
        path: 'eth/mkr-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'MANAETH': {
        count: 7,
        address: '0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97',
        path: 'eth/mana-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'KNCETH': {
        count: 7,
        address: '0xd0e785973390fF8E77a83961efDb4F271E6B8152',
        path: 'eth/knc-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'LINKETH': {
        count: 9,
        address: '0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07',
        path: 'eth/link-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'USDCETH': {
        count: 7,
        address: '0xdE54467873c3BCAA76421061036053e371721708',
        path: 'eth/usdc-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'REPETH': {
        count: 7,
        address: '0xb8b513d9cf440C1b6f5C7142120d611C94fC220c',
        path: 'eth/rep-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'ZRXETH': {
        count: 7,
        address: '0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8',
        path: 'eth/zrx-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'BATETH': {
        count: 7,
        address: '0x9b4e2579895efa2b4765063310Dc4109a7641129',
        path: 'eth/bat-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'DAIETH': {
        count: 7,
        address: '0x037E8F2125bF532F3e228991e051c8A7253B642c',
        path: 'eth/dai-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'TUSDETH': {
        count: 7,
        address: '0x73ead35fd6A572EF763B13Be65a9db96f7643577',
        path: 'eth/tusd-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'USDTETH': {
        count: 7,
        address: '0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE',
        path: 'eth/usdt-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'SUSDETH': {
        count: 7,
        address: '0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea',
        path: 'eth/susd-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'SNXETH': {
        count: 7,
        address: '0xE23d1142dE4E83C08bb048bcab54d50907390828',
        path: 'eth/snx-eth',
        answerRender: (value) => `Ξ ${((value || 0) * 1e-18).toFixed(8)}`
    },
    'COVID-19 (China)': {
        count: 1,
        address: '0x8DCD39e5deF7bb50E1840e30662B3225A98C6220',
        path: 'covid-19/china',
        answerRender: (value) => `${(value || 0)} Cases`
    },
    'COVID-19 (Italy)': {
        count: 1,
        address: '0x2f4A30ddc1FE8D1F2Ea0a2F4735BEcCF85C16C2f',
        path: 'covid-19/italy',
        answerRender: (value) => `${(value || 0)} Cases`
    },
    'COVID-19 (France)': {
        count: 1,
        address: '0x49ba496eE2c02d12DAB90Df89282222a1c43F1b1',
        path: 'covid-19/france',
        answerRender: (value) => `${(value || 0)} Cases`
    },
    'COVID-19 (US)': {
        count: 1,
        address: '0x01456dce7730a60b83a0bb767f9e29ac9a0e6353',
        path: 'covid-19/us',
        answerRender: (value) => `${(value || 0)} Cases`
    },
    'COVID-19 (UK)': {
        count: 1,
        address: '0xe61488faa89023b50b06c9fa9bd76ddd61d1d7ee',
        path: 'covid-19/uk',
        answerRender: (value) => `${(value || 0)} Cases`
    },
    'COVID-19 (Australia)': {
        count: 1,
        address: '0x9b952670c4378672c758bff6055c6cb3a0df8727',
        path: 'covid-19/australia',
        answerRender: (value) => `${(value || 0)} Cases`
    }
}
