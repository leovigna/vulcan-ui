import React from 'react';

const WrappedHomeView = React.lazy(() => import('./views/HomeView/WrappedHomeView'));
const WrappedFeedView = React.lazy(() => import('./views/FeedView/WrappedFeedView'));
const WrappedProtocolView = React.lazy(() => import('./views/ProtocolView/WrappedProtocolView'));
const ChainlinkFeedView = React.lazy(() => import('./views/FeedView/ChainlinkFeedView'))
const TellorFeedView = React.lazy(() => import('./views/FeedView/TellorFeedView'))
const CoinbaseFeedView = React.lazy(() => import('./views/FeedView/CoinbaseFeedView'))
const MKRDaoFeedView = React.lazy(() => import('./views/FeedView/MKRDaoFeedView'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home', component: WrappedHomeView },
    { path: '/feeds/chainlink/:id', exact: true, name: 'Feeds', component: ChainlinkFeedView },
    { path: '/feeds/tellor/:id', exact: true, name: 'Feeds', component: TellorFeedView },
    { path: '/feeds/coinbase/:id', exact: true, name: 'Feeds', component: CoinbaseFeedView },
    { path: '/feeds/mkrdao/:id', exact: true, name: 'Feeds', component: MKRDaoFeedView },
    { path: '/feeds/:address', exact: true, name: 'Feeds', component: WrappedFeedView },
    { path: '/protocols/:id', exact: true, name: 'Protocols', component: WrappedProtocolView }
];

export default routes;
