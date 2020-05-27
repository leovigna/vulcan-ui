/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { useContext } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import web3 from 'web3'

import AddressFeedView from './AddressFeedView'
import NamedFeedView from './NamedFeedView'
import ENSFeedView from './ENSFeedView'

const WrappedFeedView = ({ match, ...props }) => {
    const drizzleContext = useContext(DrizzleContext.Context)
    const { drizzle, initialized } = drizzleContext;

    const matchParams = match.params;
    const contract = matchParams.contract

    if (!initialized) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
    if (!drizzle.web3) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    //Contract Address
    if (web3.utils.isAddress(contract)) {
        return (<AddressFeedView address={contract} {...props} />)
    }

    //Vulcan API Contract
    return (<NamedFeedView name={contract} {...props} />)
    //ENS Domain
    //TBD
}

export default WrappedFeedView;
