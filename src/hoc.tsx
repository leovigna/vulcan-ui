import React, { useContext, useState, useEffect } from 'react';
import { connect } from "react-redux"
import { DrizzleContext } from "@drizzle/react-plugin"
import { FeedTypes, ProtocolTypes } from './store/types'
import moment from 'moment'
import { renderAnswer, setFeedCacheKey } from './store/feed/actions'
import { FeedSelectors, ContractFavoriteSelectors, NetworkSelectors, ProtocolSelectors, DrizzleSelectors } from './store/selectors'
import { merge } from 'lodash'
import { setFeedStateCache } from './store/feed/selectors';
import { Drizzle } from '@drizzle/store';
import { SetFeedCacheKeyActionInput } from './store/feed/types';
import { SetContractFavoriteActionInput } from './store/contractFavorite/types';
import { setContractFavorite } from './store/contractFavorite/actions';

interface Props {
    feeds: [FeedTypes.Feed],
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    },
    contractStates: [any],
    networkId: string
}

export const withDrizzleContext = (Component: any) => (props) => {
    const drizzleContext = useContext(DrizzleContext.Context)
    return (<Component drizzleContext={drizzleContext} {...props} />)
}
export const withNetworkId = connect((state: any) => { return { networkId: NetworkSelectors.networkIdSelector(state) } })
export const withFeeds = connect((state: any, { networkId }) => { return { feeds: FeedSelectors.feedsByFilterSelector(state, { networkId }) } })
export const withFavoriteFeeds = connect((state: any, { networkId }) => {
    const contractFavorites = ContractFavoriteSelectors.contractFavoritesByFilterSelector(state, { favorite: true, networkId })
    const favoriteFeeds = contractFavorites.map((c) => c.feed).filter((f) => !!f)

    return { favoriteFeeds }
})
export const withProtocols = connect((state: any) => { return { protocols: ProtocolSelectors.protocolsByFilterSelector(state, {}) } })
export const withProtocol = connect((state: any, { id }) => { return { protocol: ProtocolSelectors.protocolByIdSelector(state, id) } })
export const withSetContractFavorite = connect(null, (dispatch) => {
    return { setContractFavorite: (payload: SetContractFavoriteActionInput) => dispatch(setContractFavorite(payload)) }
})
export const withSetCacheKey = connect(null, (dispatch) => {
    return { setCacheKey: (payload: SetFeedCacheKeyActionInput) => dispatch(setFeedCacheKey(payload)) }
})



export function useFeedsCache(context: Drizzle.Context, feeds: Array<FeedTypes.Feed>, setCacheKey: any) {
    const { drizzle, initialized } = context;
    useEffect(() => {
        if (initialized) {
            console.debug('setCacheKey')
            feeds.forEach((f) => {
                setFeedStateCache(drizzle, f, setCacheKey)
            })
        }
    }, [feeds, initialized])
}

export const useFeedsCacheState = (context: Drizzle.Context, feeds: Array<FeedTypes.Feed>) => {
    const { drizzleState, initialized } = context;
    const [feedValues, setFeedValues] = useState({});

    useEffect(() => {
        if (drizzleState) {
            const feedValues = Object.fromEntries(feeds.map((f) => {
                const value = FeedSelectors.feedStateSelector(drizzleState, f)
                value.value = value.value ? renderAnswer(f.answerRenderOptions, value.value) : ''
                value.timestamp = value.timestamp ? moment(value.timestamp, 'X').format('MMMM D - h:mm A') : '';

                return [[f.id], value]
            }))
            setFeedValues(feedValues)
        }
    }, [feeds, initialized])

    return feedValues;
}

export const withFeedsCache = (Component: any) => ({ feeds, setCacheKey, ...props }: Props) => {
    const drizzleContext = useContext(DrizzleContext.Context)

    useFeedsCache(drizzleContext, feeds, setCacheKey)
    const feedValues = useFeedsCacheState(drizzleContext, feeds)

    return (<Component feeds={feeds} feedValues={feedValues} setCacheKey={setCacheKey} {...props} />)
}

export function useDrizzleCache(context: DrizzleContext.Context, { id, cacheName, cacheArgs }, { cacheKey, contractId }: FeedTypes.DrizzleCacheKey, setCacheKey: any) {
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