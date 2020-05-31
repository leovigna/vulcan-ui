import React, { useContext, useEffect, useState } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import ProtocolView from './ProtocolView'
import { protocols } from '../../data/data';
import { contractsSelector, customContractsSelector } from '../../store/selectors'
import { ProtocolTypes } from '../../store/types'

interface Props extends ProtocolTypes.Protocol {
    networkId: string
}

const WrappedProtocolView = (props: Props) => {
    return (<ProtocolView {...props} />)
}

const mapStateToProps = (state: any, { networkId }: Props) => {
    return {
        feeds: contractsSelector(state) || [],
        protocols
    }
}

export default connect(mapStateToProps)(WrappedProtocolView);