import { connect } from "react-redux"
import { compose, flattenProp } from 'recompose'
import { withFeedsCache, withNetworkId, withContractFavorites } from '../../hoc'
import ProtocolView from './ProtocolView'
import { setContractFavorite } from '../../store/contractFavorite/actions'
import { SetContractFavoriteActionInput } from '../../store/contractFavorite/types'
import { contractStateSelector, FeedSelectors, ProtocolSelectors } from '../../store/selectors'
import { SetFeedCacheKeyActionInput } from "../../store/feed/types"
import { setFeedCacheKey } from "../../store/feed/actions"

const mapStateToProps = (state: any, { name, networkId, contractFavorites }) => {
    const protocol = ProtocolSelectors.protocolSelector(state, name)
    const favoriteIds = new Set(contractFavorites.map((f) => f.id))
    const feeds = FeedSelectors.feedsByFilterSelector(state, { networkId, protocol: name })
    feeds.forEach((f) => {
        f.hearted = favoriteIds.has(f.id);
        f.protocolImg = protocol.img
    })



    return {
        networkId,
        contractStates: contractStateSelector(state),
        feeds,
        ...protocol
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setContractFavorite: (payload: SetContractFavoriteActionInput) => dispatch(setContractFavorite(payload)),
        setCacheKey: (payload: SetFeedCacheKeyActionInput) => dispatch(setFeedCacheKey(payload))
    }
}

export default compose(
    flattenProp('match'),
    flattenProp('params'),
    withNetworkId,
    withContractFavorites,
    connect(mapStateToProps, mapDispatchToProps),
    withFeedsCache
)(ProtocolView);