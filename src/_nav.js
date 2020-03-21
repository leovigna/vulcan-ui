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
        },
        {
            name: 'COVID-19',
            url: '/aggregator',
            icon: 'icon-speedometer',
            children: [

            ]
        },
        {
            name: 'Custom Aggregators',
            url: '/aggregator',
            icon: 'icon-speedometer',
            children: [
                {
                    name: 'Add Aggregator',
                    url: '/aggregator/add',
                    icon: 'icon-speedometer',
                }
            ]
        }
    ]
    const data = { 'USD': [], 'ETH': [], 'COVID-19': [] }

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
        } else if (k.includes('COVID-19')) {
            data['COVID-19'].push(n)
        }
    })

    nav[0].children = data.USD
    nav[1].children = data.ETH
    nav[2].children = data['COVID-19']

    return nav
}

const nav = {
    items: [...DashboardNav, ...AggregatorNav()],
};

export default nav;
