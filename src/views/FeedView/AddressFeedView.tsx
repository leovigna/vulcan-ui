import React from 'react';
import { connect } from "react-redux"
import { contractByAddressSelector } from "../../store/selectors"

import FeedView from './FeedView'

interface Props {
    address: string,
}

const AddressFeedView = ({ address, ...props }: Props) => {
    return (<FeedView address={address} {...props} />)
})

function mapStateToProps(state: any, { address }: Props) {
    return {
        contract: contractByAddressSelector(state, address)
    }
}

export default connect(mapStateToProps)(AddressFeedView);