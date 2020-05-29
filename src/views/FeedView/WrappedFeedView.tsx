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
    contractName: string,
    contractCategory: string,
    contractPath: string,
    contractAddress: string,
    contractENS: string
}

const WrappedFeedView = ({
    contractName,
    contractCategory,
    contractPath,
    contractAddress,
    contractENS }: Props) => {

    const drizzleContext = useContext(DrizzleContext.Context)
    const history = useHistory();

    const { drizzle, initialized } = drizzleContext;

    if (!initialized) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
    if (!drizzle.web3) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    //Known contract
    if (contractAddress) {
        if (contractPath) {
            //Redirect
            history.replace(`/feeds/${contractPath}`)
            return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
        }
        return (<AddressFeedView address={contractAddress} />)
    }

    if (contractPath) {
        return (<NamedFeedView name={contractName} category={contractCategory} path={contractPath} />)
    }

    return 404
    //ENS Domain
    //TBD
}

const mapStateToProps = (state: any, { match }: Props) => {
    const contractAddress = match.params.address;
    const contractName = match.params.name;
    const contractCategory = match.params.category;
    let contractPath;
    let contractENS;

    if (contractAddress && web3.utils.isAddress(contractAddress)) {
        const contract = contractById(state, contractAddress)
        console.debug(contract)
        if (contract) {
            contractPath = contract.path;
        }
    } else if (contractName && contractCategory) {
        contractPath = contractCategory + '/' + contractName
    }

    return {
        contractPath,
        contractName,
        contractCategory,
        contractAddress,
        contractENS,
    }
}


export default connect(mapStateToProps)(WrappedFeedView);