import React from 'react';
import { connect } from "react-redux"
import { contractByNameSelector } from "../../store/selectors"

import FeedView from './FeedView'

interface Props {
    name: string
}

const NamedFeedView = ({ name, ...props }: Props) => {
    return (<FeedView {...props} />)
})

function mapStateToProps(state: any, { name }: Props) {
    return {
        contract: contractByNameSelector(state, name)
    }
}

export default connect(mapStateToProps)(NamedFeedView);