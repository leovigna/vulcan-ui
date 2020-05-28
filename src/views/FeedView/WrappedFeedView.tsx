/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { useContext } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import web3 from 'web3'
import {
    useHistory
} from "react-router-dom";


import AddressFeedView from './AddressFeedView'
import NamedFeedView from './NamedFeedView'
import ENSFeedView from './ENSFeedView'

import {
    contractById
} from "../../store/selectors"

interface Props {
    match: {
        params: {
            contract: string
        }
    },
    contractMatchParam: string,
    contractName: string,
    contractAddress: string,
    contractENS: string
}

const WrappedFeedView = ({
    contractMatchParam,
    contractName,
    contractAddress,
    contractENS }: Props) => {

    const drizzleContext = useContext(DrizzleContext.Context)
    const history = useHistory();

    const { drizzle, initialized } = drizzleContext;

    if (!initialized) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
    if (!drizzle.web3) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    //Known contract
    if (contractName) {
        if (contractName !== contractMatchParam) {
            //Redirect
            history.replace(`/feeds/${contractName}`)
            return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
        }
        return (<NamedFeedView name={contractName} />)
    }

    if (contractAddress) {
        return (<AddressFeedView address={contractAddress} />)
    }

    return 404
    //Vulcan API Contract
    return (<NamedFeedView name={contractENS} />)
    //ENS Domain
    //TBD
}

const mapStateToProps = (state: any, { match }: Props) => {
    const contractMatchParam = match.params.contract;
    let contractName;
    let contractAddress;
    let contractENS;

    if (web3.utils.isAddress(contractMatchParam)) {
        contractAddress = contractMatchParam;
        const contract = contractById(state, contractAddress)
        console.debug(contract)
        if (contract) {
            contractName = contract.path;
        }
    }

    return {
        contractMatchParam,
        contractName,
        contractAddress,
        contractENS,
    }
}


export default connect(mapStateToProps)(WrappedFeedView);