import React, { useContext, useState, useEffect, Component } from 'react';
import { connect } from "react-redux"
import { DrizzleContext } from "@drizzle/react-plugin"
import { FeedTypes, ProtocolTypes } from './store/types'
import moment from 'moment'
import { renderAnswer } from './store/feed/actions'
import { FeedSelectors, ContractFavoriteSelectors, NetworkSelectors, ProtocolSelectors } from './store/selectors'

interface Props {
    feeds: [FeedTypes.Feed],
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    },
    contractStates: [any],
    networkId: string
}

export const withNetworkId = connect((state: any) => { return { networkId: NetworkSelectors.networkIdSelector(state) } })
export const withFeeds = connect((state: any, { networkId }) => { return { feeds: FeedSelectors.feedsByFilterSelector(state, { networkId }) } })
export const withContractFavorites = connect((state: any) => { return { contractFavorites: ContractFavoriteSelectors.contractFavoritesByFilterSelector(state, { favorite: true }) } })
export const withProtocols = connect((state: any) => { return { protocols: ProtocolSelectors.protocolSelector(state) } })

export function useFeedsCache(context: Drizzle.Context, feeds: Array<FeedTypes.Feed>, setCacheKey: any) {
    const drizzleContext = useContext(DrizzleContext.Context)
    const { drizzle, drizzleState, initialized } = drizzleContext;

    const [feedValues, setFeedValues] = useState({});
    const feedsAll = feeds.map((f) => {
        if (f.protocol === 'tellor') {
            const fTellor = f as FeedTypes.TellorFeed
            return fTellor.getCurrentValue.cacheKey
        } else if (f.protocol === 'chainlink') {
            const fChainlink = f as FeedTypes.ChainlinkFeed
            return fChainlink.latestAnswer.cacheKey
        }
        return null
    }).join(',')

    useEffect(() => {
        if (initialized) {
            console.debug('setCacheKey')
            feeds.forEach((f) => {
                if (f.protocol === 'tellor') {
                    const fTellor = f as FeedTypes.TellorFeed
                    if (!fTellor.getCurrentValue.cacheKey) {
                        const contract = drizzle.contracts[fTellor.getCurrentValue.contractId]
                        const cacheKey = contract.methods.getCurrentValue.cacheCall(fTellor.tellorId)
                        setCacheKey({ id: fTellor.id, cacheName: 'getCurrentValue', contractId: fTellor.getCurrentValue.contractId, cacheKey })
                    }
                } else if (f.protocol === 'chainlink') {
                    const fChainlink = f as FeedTypes.ChainlinkFeed
                    if (!fChainlink.latestAnswer.cacheKey) {
                        const contract = drizzle.contracts[fChainlink.latestAnswer.contractId]
                        const cacheKey = contract.methods.latestAnswer.cacheCall()
                        setCacheKey({ id: fChainlink.id, cacheName: 'latestAnswer', contractId: fChainlink.latestAnswer.contractId, cacheKey })
                    }
                    if (!fChainlink.latestRound.cacheKey) {
                        const contract = drizzle.contracts[fChainlink.latestRound.contractId]
                        const cacheKey = contract.methods.latestRound.cacheCall()
                        setCacheKey({ id: fChainlink.id, cacheName: 'latestRound', contractId: fChainlink.latestRound.contractId, cacheKey })
                    }
                    if (!fChainlink.latestTimestamp.cacheKey) {
                        const contract = drizzle.contracts[fChainlink.latestTimestamp.contractId]
                        const cacheKey = contract.methods.latestTimestamp.cacheCall()
                        setCacheKey({ id: fChainlink.id, cacheName: 'latestTimestamp', contractId: fChainlink.latestTimestamp.contractId, cacheKey })
                    }
                }
            })
        }
    }, [feedsAll, initialized])

    useEffect(() => {
        if (drizzleState) {
            const feedValuesList = feeds.map((f) => {
                if (f.protocol === 'tellor') {
                    const fTellor = f as FeedTypes.TellorFeed
                    if (fTellor.getCurrentValue.cacheKey) {
                        const contractState = drizzleState.contracts[fTellor.getCurrentValue.contractId]
                        const value = contractState.getCurrentValue[fTellor.getCurrentValue.cacheKey]?.value
                        return ({ [f.id]: { getCurrentValue: value } })
                    }
                } else if (f.protocol === 'chainlink') {
                    const fChainlink = f as FeedTypes.ChainlinkFeed
                    if (fChainlink.latestAnswer.cacheKey) {
                        const latestAnswer = drizzleState.contracts[fChainlink.latestAnswer.contractId].latestAnswer[fChainlink.latestAnswer.cacheKey]?.value
                        const latestRound = drizzleState.contracts[fChainlink.latestRound.contractId].latestRound[fChainlink.latestRound.cacheKey]?.value
                        const latestTimestamp = drizzleState.contracts[fChainlink.latestTimestamp.contractId].latestTimestamp[fChainlink.latestTimestamp.cacheKey]?.value
                        return ({ [f.id]: { latestAnswer, latestRound, latestTimestamp } })
                    }
                }
                return null
            })

            const feedValues = feedValuesList.filter((f) => !!f).reduce((acc, f) => { return { ...acc, ...f } }, {})
            setFeedValues(feedValues)
        }
    }, [feeds])

    return feedValues;
}

export const withFeedsCache = (Component: any) => ({ feeds, setCacheKey, ...props }: Props) => {
    const feedValues = useFeedsCache(DrizzleContext.Context, feeds, setCacheKey)
    feeds.forEach((f) => {
        const feedValue = feedValues[f.id]
        const { protocol, answerRenderOptions } = f
        if (!feedValue) return;
        const value = protocol === 'chainlink' ? (feedValue as FeedTypes.ChainlinkFeedState)?.latestAnswer :
            (protocol === 'tellor' ? (feedValue as FeedTypes.TellorFeedState)?.getCurrentValue?.value : -1)
        const latestAnswer = value ? renderAnswer(answerRenderOptions, value) : null;

        const latestTimestamp = protocol === 'chainlink' ? (feedValue as FeedTypes.ChainlinkFeedState)?.latestTimestamp :
            (protocol === 'tellor' ? (feedValue as FeedTypes.TellorFeedState)?.getCurrentValue?._timestampRetrieved : -1)
        console.debug(latestTimestamp)
        const lastUpdate = latestTimestamp ? moment(latestTimestamp, 'X').format('MMMM D - h:mm A') : null;

        feedValue.timestamp = lastUpdate
        feedValue.value = latestAnswer
    })

    return (<Component feeds={feeds} feedValues={feedValues} setCacheKey={setCacheKey} {...props} />)
}
export const withProtocolMetrics = (Component: any) => ({ feeds, protocols, ...props }: Props) => {
    Object.values(protocols).forEach((p) => {
        p.feedCount = feeds.filter((f) => f.protocol === p.id).length
    })

    return (<Component feeds={feeds} protocols={protocols} {...props} />)
}


export function useDrizzleCache(context: DrizzleContext.Context, { id, cacheName, cacheArgs }, { cacheKey, contractId }: FeedTypes.DrizzleCacheKey, setCacheKey: any) {
    const drizzleContext = useContext(DrizzleContext.Context)
    const { drizzle, drizzleState, initialized } = drizzleContext;

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