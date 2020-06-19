import React, { useContext, useState, useEffect, Component } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import { FeedTypes, ProtocolTypes } from './store/types'
import moment from 'moment'

interface Props {
    feeds: [FeedTypes.Feed],
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    },
    contractStates: [any],
    networkId: string
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


export const withParsedFeeds = (Component: any) => ({ feeds, contractStates, protocols, ...props }: Props) => {
    const drizzleContext = useContext(DrizzleContext.Context)
    const { drizzle } = drizzleContext;
    const [cacheKeys, setCacheKeys] = useState({})
    useEffect(() => {
        console.debug(cacheKeys)
        const cacheNewKeys = {}
        feeds.forEach((f) => {
            const { address } = f
            if (!cacheKeys[address] && drizzle.contracts[address]) {
                const roundKey = drizzle.contracts[address].methods.latestRound.cacheCall()
                const answerKey = drizzle.contracts[address].methods.latestAnswer.cacheCall()
                const timestampKey = drizzle.contracts[address].methods.latestTimestamp.cacheCall()
                cacheNewKeys[address] = { roundKey, answerKey, timestampKey }
            }
        })
        setCacheKeys({ ...cacheKeys, ...cacheNewKeys })
    }, [contractStates])

    const parsedFeeds = feeds.map((f) => {
        const contractState = contractStates[f.address]
        return {
            ...f,
            lastUpdate: moment.unix(contractState?.latestTimestamp['0x0']?.value).format('LLLL'),
            value: f.answerRender(contractState?.latestAnswer['0x0']?.value)
        }
    })

    return (<Component feeds={parsedFeeds} protocols={protocols} {...props} />)
}
