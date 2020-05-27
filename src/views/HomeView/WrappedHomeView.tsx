import React, { useContext, useEffect, useState } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import HomeView, { Feed, Protocol } from './HomeView'
import { protocols } from '../../stories/data';
import { contractsSelector, customContractsSelector } from '../../store/selectors'

interface Props {
    feeds: [Feed],
    protocols: {
        [key: string]: Protocol
    },
    networkId: string
}

const WrappedHomeView = ({ feeds, protocols }: Props) => {
    return (<HomeView feeds={feeds} protocols={protocols} />)
}

const mapStateToProps = (state: any, { networkId }: Props) => {
    return {
        feeds: contractsSelector(state) || [],
        protocols
    }
}

export default connect(mapStateToProps)(WrappedHomeView);