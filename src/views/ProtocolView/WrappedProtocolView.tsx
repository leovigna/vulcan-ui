import React, { useContext, useEffect, useState } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import ProtocolView, { Feed, Protocol } from './ProtocolView'
import { protocols } from '../../data/data';
import { contractsSelector, customContractsSelector } from '../../store/selectors'

interface Props {
    feeds: [Feed],
    protocols: {
        [key: string]: Protocol
    },
    networkId: string
}

const WrappedProtocolView = ({ feeds, protocols }: Props) => {
    return (<ProtocolView feeds={feeds} protocols={protocols} />)
}

const mapStateToProps = (state: any, { networkId }: Props) => {
    return {
        feeds: contractsSelector(state) || [],
        protocols
    }
}

export default connect(mapStateToProps)(WrappedProtocolView);