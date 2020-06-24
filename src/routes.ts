import React from 'react';

const WrappedHomeView = React.lazy(() => import('./views/HomeView/WrappedHomeView'));
const WrappedFeedView = React.lazy(() => import('./views/FeedView/WrappedFeedView'));
const WrappedProtocolView = React.lazy(() => import('./views/ProtocolView/WrappedProtocolView'));
const TellorFeedView = React.lazy(() => import('./views/FeedView/TellorFeedView'))
const ChainlinkFeedView = React.lazy(() => import('./views/FeedView/ChainlinkFeedView'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home', component: WrappedHomeView },
    { path: '/feeds/chainlink/:id', exact: true, name: 'Feeds', component: ChainlinkFeedView },
    { path: '/feeds/tellor/:id', exact: true, name: 'Feeds', component: TellorFeedView },
    { path: '/feeds/:address', exact: true, name: 'Feeds', component: WrappedFeedView },
    { path: '/protocols/:id', exact: true, name: 'Protocols', component: WrappedProtocolView }
];

export default routes;
