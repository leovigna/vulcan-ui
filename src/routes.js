import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AggregatorView = React.lazy(() => import('./views/AggregatorView'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/aggregator', exact: true, name: 'Oracle Aggregator', component: Dashboard },
    { path: '/aggregator/:address', exact: true, name: 'Aggregator Data', component: AggregatorView }
];

export default routes;
