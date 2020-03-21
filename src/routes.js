import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AggregatorView = React.lazy(() => import('./views/AggregatorView'));
const AggregatorAddView = React.lazy(() => import('./views/AggregatorAddView'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/dashboard/:category', exact: true, name: 'Category', component: Dashboard },
    { path: '/dashboard/:category/:name', exact: true, name: 'Aggregator Data', component: AggregatorView },
    { path: '/aggregator/add', exact: true, name: 'Add Contract', component: AggregatorAddView },
    { path: '/aggregator/:address', exact: true, name: 'Aggregator Data', component: AggregatorView },
];

export default routes;
