/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    CCol as Col,
    CRow as Row,
} from '@coreui/react';

import qs from 'qs';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import web3 from 'web3'

import Aggregator from "../../components/Aggregator/Aggregator"
import { contractsSelector } from "../../store/selectors"
import { ContractActions } from "../../store/actions"
import { ContractTypes } from "../../store/types"


import AddressFeedView from './AddressFeedView'
import NamedFeedView from './NamedFeedView'
import ENSFeedView from './ENSFeedView'

const WrappedFeedView = ({ match, ...props }) => {
    const matchParams = match.params;
    const contract = matchParams.contract

    //Contract Address
    if (web3.utils.isAddress(contract)) {
        return (<AddressFeedView address={contract} {...props} />)
    }

    //Vulcan API Contract
    return (<NamedFeedView name={contract} {...props} />)
    //ENS Domain
    //TBD
}

function mapStateToProps(state) {
    return {
        contracts: contractsSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateContractEvents: (data: ContractTypes.UpdateContractEventsActionInput) => dispatch(ContractActions.updateContractEvents(data)),
        setupContract: (data: ContractTypes.SetupContractActionInput) => dispatch(ContractActions.setupContract(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFeedView);
