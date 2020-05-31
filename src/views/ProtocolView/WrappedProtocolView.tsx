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
interface MatchProps {
    match: {
        params: {
            name: string
        }
    }
}

const WrappedProtocolView = (props: Props) => {
    return (<ProtocolView {...props} />)
}

const mapStateToProps = (state: any, { match }: MatchProps) => {
    const name = match.params.name
    const protocol = protocols[name]
    return { ...protocol }
}

export default connect(mapStateToProps)(WrappedProtocolView);