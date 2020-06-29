import React, { useContext, useState, useEffect } from 'react';
import { Provider, connect } from "react-redux"
import { DrizzleContext } from "@drizzle/react-plugin"
import { PersistGate } from 'redux-persist/integration/react'
import { ApolloProvider } from '@apollo/react-hooks';

import { FeedTypes, ProtocolTypes } from './store/types'
import { setFeedCacheKey } from './store/feed/actions'
import { FeedSelectors, ContractFavoriteSelectors, NetworkSelectors, ProtocolSelectors } from './store/selectors'
import { setFeedStateCache, setFeedStateFullCache } from './store/feed/selectors';
import { SetFeedCacheKeyActionInput, REFRESH_FEED_LIST, Feed, RefreshFeedListActionInput } from './store/feed/types';
import { SetContractFavoriteActionInput } from './store/contractFavorite/types';
import { setContractFavorite } from './store/contractFavorite/actions';
import { START_POLL_COINBASE_ORACLE } from './store/coinbase/types';
import { compose } from 'recompose';

interface Props {
    feeds: [FeedTypes.Feed],
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    },
    contractStates: [any],
    networkId: string
}

export const withDrizzleContext = (Component: any) => (props: any) => {
    const drizzleContext = useContext(DrizzleContext.Context)
    return (<Component drizzleContext={drizzleContext} {...props} />)
}
export const withNetworkId = connect((state: any) => { return { networkId: NetworkSelectors.networkIdSelector(state) } })

export const withFeeds = connect((state: any, { networkId }: Props) => {
    return { feeds: FeedSelectors.feedsByFilterSelector(state, { networkId }, state) }
})
export const withFavoriteFeeds = connect((state: any, { networkId }: Props) => {
    const contractFavorites = ContractFavoriteSelectors.contractFavoritesByFilterSelector(state, { favorite: true, networkId }, state)
    const favoriteFeeds = contractFavorites.map((c) => c.feed).filter((f) => !!f)

    return { favoriteFeeds }
})
export const withFeed = connect((state: any, { id }: Props) => {
    return { feed: FeedSelectors.feedByIdSelector(state, id, state) }
})

export const withProtocols = connect((state: any) => { return { protocols: ProtocolSelectors.protocolsByFilterSelector(state, {}, state) } })
export const withProtocol = connect((state: any, { id }: any) => { return { protocol: ProtocolSelectors.protocolByIdSelector(state, id, state) } })
export const withSetContractFavorite = connect(null, (dispatch) => {
    return { setContractFavorite: (payload: SetContractFavoriteActionInput) => dispatch(setContractFavorite(payload)) }
})
export const withSetCacheKey = connect(null, (dispatch) => {
    return { setCacheKey: (payload: SetFeedCacheKeyActionInput) => dispatch(setFeedCacheKey(payload)) }
})
export const withStartPollingCoinbase = connect(null, (dispatch) => {
    return { startPollingCoinbase: () => dispatch({ type: START_POLL_COINBASE_ORACLE }) }
})


export const withReduxStoreProvider = (store: any) => (Component: any) => (props: any) => {
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>)
}
export const withPersistStore = (persistor: any) => (Component: any) => (props: any) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            <Component {...props} />
        </PersistGate>)
}
export const withApolloProvider = (client: any) => (Component: any) => (props: any) => {
    return (
        <ApolloProvider client={client}>
            <Component {...props} />
        </ApolloProvider>)
}
export const withDrizzleContextProvider = (drizzle: any) => (Component: any) => (props: any) => {
    return (
        <DrizzleContext.Provider drizzle={drizzle}>
            <Component {...props} />
        </DrizzleContext.Provider>)
}

export const withRefreshFeeds = connect(null, (dispatch) => { return { refreshFeeds: (payload: RefreshFeedListActionInput) => dispatch({ type: REFRESH_FEED_LIST, payload }) } })
export const refreshOnUpdate = (Component: any) => (props: any) => {
    const { drizzle, initialized } = props.drizzleContext;
    useEffect(() => {
        if (initialized) {
            props.refreshFeeds({ feeds: props.feeds, drizzle })
        }
    }, [props.feeds, initialized])

    return (<Component {...props} />)
}

export function useFeedsCache(context: Drizzle.Context, feeds: Array<FeedTypes.Feed>, setCacheKey: any) {
    const { drizzle, initialized } = context;
    useEffect(() => {
        if (initialized) {
            feeds.forEach((f) => {
                setFeedStateCache(drizzle, f, setCacheKey)
            })
        }
    }, [feeds, initialized])
}
export const withFeedsCache = (Component: any) => (props: any) => {
    useFeedsCache(props.drizzleContext, props.feeds, props.setCacheKey)
    return (<Component {...props} />)
}
export const withFeedCache = (Component: any) => (props: any) => {
    const { drizzle, initialized } = props.drizzleContext;
    useEffect(() => {
        if (initialized && !!props.feed) {
            setFeedStateCache(drizzle, props.feed, props.setCacheKey)
        }
    }, [props.feed, initialized])
    return (<Component {...props} />)
}

export const withFeedHistoryCache = (Component: any) => (props: any) => {
    const { drizzle, drizzleState, initialized } = props.drizzleContext;
    useEffect(() => {
        if (initialized && !!props.feed) {
            setFeedStateFullCache(drizzle, props.feed, props.setCacheKey, drizzleState)
        }
    }, [props.feed, initialized])
    return (<Component {...props} />)
}

export function useDrizzleCache(context: DrizzleContext.Context, { id, cacheName, cacheArgs }: any, { cacheKey, contractId }: FeedTypes.DrizzleCacheKey, setCacheKey: any) {
    const { drizzle, drizzleState, initialized } = context;

    const [value, setCacheValue] = useState(null);

    useEffect(() => {
        if (initialized) {
            if (!cacheKey) {
                const contract = drizzle.contracts[contractId]
                const cacheKey = contract.methods[cacheName].cacheCall(...(cacheArgs || []))
                setCacheKey({ id, cacheName, contractId, cacheKey })
            }
        }
        console.debug(`Fetch ${cacheName}`)
    }, [cacheKey, initialized])

    useEffect(() => {
        if (drizzleState) {
            const value = drizzleState.contracts[contractId][cacheName][cacheKey]?.value
            if (value) {
                setCacheValue(value)
            }
        }
    })

    return value;
}