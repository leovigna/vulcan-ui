import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AggregatorView = React.lazy(() => import('./views/AggregatorView'));
const AggregatorAddView = React.lazy(() => import('./views/AggregatorAddView'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', exact: true, name: 'Oracle Aggregator', component: Dashboard },
    { path: '/dashboard/:category', exact: true, name: 'Categories', component: Dashboard },
    { path: '/aggregator/add', exact: true, name: 'Add', component: AggregatorAddView },
    { path: '/aggregator/:address', exact: true, name: 'Aggregator Data', component: AggregatorView }
];

export default routes;
