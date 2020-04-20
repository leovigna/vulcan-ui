//Use Redux Data
const DashboardNav = [
    {
        name: 'Feeds',
        url: '/dashboard',
        icon: 'icon-speedometer'
    }
]

const AggregatorNav = ({ contracts, categories, customcontracts }) => {
    const categoryNavs = {}

    Object.entries(categories).forEach(([key, { title, path }]) => {
        categoryNavs[key] = {
            name: title,
            url: '/dashboard/' + path,
            children: []
        }
    })

    contracts.forEach((c) => {
        const contractCategory = c.path.split("/")[0];
        const contractNav = {
            name: c.navTitle || c.title,
            url: `/dashboard/${c.path}`,
        };
        //@ts-ignore
        categoryNavs[contractCategory].children.push(contractNav);
    })

    const nav = []
    nav.push(...Object.values(categoryNavs))

    const customcontractsChildren = (customcontracts || []).map(contract => {
        return ({
            name: contract.name,
            url: `/aggregator/${contract.address}`,
            icon: 'icon-speedometer'
        })
    })
    nav.push({
        name: 'Custom Aggregators',
        url: '/aggregator',
        children: [
            {
                name: 'Add Aggregator',
                url: '/aggregator/add',
            },
            ...customcontractsChildren
        ]
    })

    //console.debug(nav)
    //console.debug(categoryNavs)

    return nav
}

const navCreate = ({ contracts, categories, customcontracts }) => {
    const nav = {
        items: [...DashboardNav, ...AggregatorNav({ contracts, categories, customcontracts })],
    };
    return nav
}



export default navCreate;
