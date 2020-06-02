import React, { useContext, useState, useEffect } from 'react';
import { connect } from "react-redux"
import { DrizzleContext } from "@drizzle/react-plugin"
import moment from 'moment'

import HomeView from './HomeView'
import { FeedTypes, ProtocolTypes } from '../../store/types'
import { protocols } from '../../data/data';
import { contractsSelector, contractStateSelector } from '../../store/selectors'

interface Props {
    feeds: [FeedTypes.Feed],
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    },
    contractStates: [any],
    networkId: string
}

const WrappedHomeView = ({ feeds, contractStates, protocols }: Props) => {
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
    const homeViewFeeds = feeds.map((f) => {
        const contractState = contractStates[f.address]

        return {
            ...f,
            lastUpdate: moment.unix(contractState?.latestTimestamp['0x0']?.value).format('LLLL'),
            value: f.answerRender(contractState?.latestAnswer['0x0']?.value)
        }
    })
    return (<HomeView feeds={homeViewFeeds} protocols={protocols} />)
}

const mapStateToProps = (state: any, { networkId }: Props) => {
    return {
        contractStates: contractStateSelector(state),
        feeds: contractsSelector(state),
        protocols
    }
}

export default connect(mapStateToProps)(WrappedHomeView);