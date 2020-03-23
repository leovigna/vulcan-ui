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
            name: 'US Markets',
            url: '/dashboard/markets-us',
            children: [

            ]
        },
        {
            name: 'EU Markets',
            url: '/dashboard/markets-eu',
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

    Object.entries(contracts).forEach(([k, v]) => {
        const n = {
            name: v.navTitle || v.title || k,
            url: `/dashboard/${v.path}`,
        }
        if (v.path.startsWith('usd')) {
            nav[0].children.push(n)
        } else if (v.path.startsWith('eth')) {
            nav[1].children.push(n)
        } else if (v.path.startsWith('covid-19')) {
            nav[2].children.push(n)
        } else if (v.path.startsWith('markets-us')) {
            nav[3].children.push(n)
        } else if (v.path.startsWith('markets-eu')) {
            nav[4].children.push(n)
        }
    })

    return nav
}

const nav = {
    items: [...DashboardNav, ...AggregatorNav()],
};

export default nav;
