import { contracts } from './data/contracts'

const DashboardNav = [
    {
        name: 'Aggregator',
        url: '/aggregator',
        icon: 'icon-speedometer'
    }
]

const AggregatorNav = () => {
    const nav = [
        {
            name: 'USD Pairs',
            url: '/aggregator',
            icon: 'icon-speedometer',
            children: [

            ]
        },
        {
            name: 'ETH Pairs',
            url: '/aggregator',
            icon: 'icon-speedometer',
            children: [

            ]
        }
    ]
    const data = { 'USD': [], 'ETH': [] }

    Object.entries(contracts).forEach(([k, v]) => {
        const n = {
            name: k,
            url: `/aggregator/${v.address}`,
            icon: 'icon-speedometer'
        }
        if (k.includes('USD')) {
            data.USD.push(n)
        } else if (k.includes('ETH')) {
            data.ETH.push(n)
        }
    })

    nav[0].children = data.USD
    nav[1].children = data.ETH

    return nav
}

const nav = {
    items: [...DashboardNav, ...AggregatorNav()],
};

export default nav;
