import React from 'react';

const WrappedHomeView = React.lazy(() => import('./views/HomeView/WrappedHomeView'));
const WrappedFeedView = React.lazy(() => import('./views/FeedView/WrappedFeedView'));
const WrappedProtocolView = React.lazy(() => import('./views/ProtocolView/WrappedProtocolView'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home', component: WrappedHomeView },
    { path: '/feeds/:address', exact: true, name: 'Feeds', component: WrappedFeedView },
    { path: '/feeds/:category/:name', exact: true, name: 'Feeds', component: WrappedFeedView },
    { path: '/protocols/:name', exact: true, name: 'Protocols', component: WrappedProtocolView }
];

export default routes;
