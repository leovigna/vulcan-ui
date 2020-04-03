import { contracts, categories } from './data/contracts'

const DashboardNav = [
    {
        name: 'Feeds',
        url: '/dashboard',
        icon: 'icon-speedometer'
    }
]

const AggregatorNav = () => {
    const nav = categories.map(({ title, path }) => {
        return {
            name: title,
            url: '/dashboard/' + path,
            children: [

            ]
        }
    })
    nav.push({
        name: 'Custom Aggregators',
        url: '/aggregator',
        children: [
            {
                name: 'Add Aggregator',
                url: '/aggregator/add',
            }
        ]
    })


    categories.forEach((c, idx) => {
        nav[idx].children = contracts[c.path].map((v) => {
            return {
                name: v.navTitle || v.title,
                url: `/dashboard/${v.path}`,
            }
        })
    })

    return nav
}

const nav = {
    items: [...DashboardNav, ...AggregatorNav()],
};

export default nav;
