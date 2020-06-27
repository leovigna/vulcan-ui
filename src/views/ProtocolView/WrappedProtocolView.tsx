import { connect } from "react-redux"
import { compose, flattenProp } from 'recompose'
import { withFeedsCache, withNetworkId, withProtocol, withDrizzleContext, withSetContractFavorite, withSetCacheKey } from '../../hoc'
import ProtocolView from './ProtocolView'

const mapStateToProps = (state: any) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default compose(
    flattenProp('match'),
    flattenProp('params'),
    withSetContractFavorite,
    withSetCacheKey,
    withNetworkId,
    withProtocol,
    flattenProp('protocol'),
    withDrizzleContext,
    withFeedsCache,
    connect(mapStateToProps, mapDispatchToProps)
)(ProtocolView);