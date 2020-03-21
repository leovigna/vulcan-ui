import { contracts } from './data/contracts'

const DashboardNav = [
    {
        name: 'Feeds',
        url: '/dashboard',
        icon: 'icon-speedometer'
    }
]

const AggregatorNav = () => {
    const nav = [
        {
            name: 'USD Pairs',
            url: '/dashboard/usd',
            children: [

            ]
        },
        {
            name: 'ETH Pairs',
            url: '/dashboard/eth',
            children: [

            ]
        },
        {
            name: 'COVID-19',
            url: '/dashboard/covid-19',
            children: [

            ]
        },
        {
            name: 'Custom Aggregators',
            url: '/aggregator',
            children: [
                {
                    name: 'Add Aggregator',
                    url: '/aggregator/add',
                }
            ]
        }
    ]
    const data = { 'USD': [], 'ETH': [], 'COVID-19': [] }

    Object.entries(contracts).forEach(([k, v]) => {
        const n = {
            name: k,
            url: `/dashboard/${v.path}`,
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
