import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AggregatorView = React.lazy(() => import('./views/AggregatorView'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/aggregator', name: 'AggregatorView', component: AggregatorView }
];

export default routes;
