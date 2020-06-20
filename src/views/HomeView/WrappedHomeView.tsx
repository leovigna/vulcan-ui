import { connect } from "react-redux"
import { compose } from 'recompose'
import { withFeedsCache, withProtocolMetrics, withNetworkId, withFeeds, withFavoriteFeeds, withProtocols, withContractFavorites } from '../../hoc'
import HomeView from './HomeView'
import { setContractFavorite } from '../../store/contractFavorite/actions'
import { SetContractFavoriteActionInput } from '../../store/contractFavorite/types'
import { SetFeedCacheKeyActionInput } from "../../store/feed/types"
import { setFeedCacheKey } from "../../store/feed/actions"
import { Protocol } from "../../store/protocol/types"

const mapStateToProps = (state: any, { protocols, feeds, contractFavorites }) => {
    const protocolsMap: { [key: string]: Protocol } = protocols.reduce((acc, p: Protocol) => { return { ...acc, [p.id]: p } }, {})
    const favoriteIds = new Set(contractFavorites.map((f) => f.id))
    const favoriteFeeds = contractFavorites.map((f) => f.feed).filter((f) => !!f)
    favoriteFeeds.forEach((f) => {
        f.hearted = true;
        f.protocolImg = protocolsMap[f.protocol].img
    })
    feeds.forEach((f) => {
        f.hearted = favoriteIds.has(f.id);
        f.protocolImg = protocolsMap[f.protocol].img
    })

    return {
        feeds,
        favoriteFeeds,
        protocols: protocolsMap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setContractFavorite: (payload: SetContractFavoriteActionInput) => dispatch(setContractFavorite(payload)),
        setCacheKey: (payload: SetFeedCacheKeyActionInput) => dispatch(setFeedCacheKey(payload))
    }
}

export default compose(
    withNetworkId,
    withFeeds,
    withContractFavorites,
    withProtocols,
    connect(mapStateToProps, mapDispatchToProps),
    withFeedsCache,
    withProtocolMetrics
)(HomeView);