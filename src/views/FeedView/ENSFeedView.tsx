import React from 'react';
import { connect } from "react-redux"
import { contractByENSSelector } from "../../store/selectors"

import FeedView from './FeedView'

interface Props {
    ens: string,
}

const ENSFeedView = ({ ens, ...props }: Props) => {
    return (<FeedView {...props} />)
})

function mapStateToProps(state: any, { ens }: Props) {
    return {
        contract: contractByENSSelector(state, ens)
    }
}

export default connect(mapStateToProps)(ENSFeedView);