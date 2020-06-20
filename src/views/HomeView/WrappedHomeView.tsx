import { connect } from "react-redux"
import { compose } from 'recompose'
import { withFeedsCache } from '../../hoc'
import HomeView from './HomeView'
import protocols from '../../data/protocols'
import { setContractFavorite } from '../../store/contractFavorite/actions'
import { SetContractFavoriteActionInput } from '../../store/contractFavorite/types'
import { contractFavoritesByFilterSelector, networkIdSelector, feedsByFilterSelector } from '../../store/selectors'
import { SetFeedCacheKeyActionInput } from "../../store/feed/types"
import { setFeedCacheKey } from "../../store/feed/actions"

const mapStateToProps = (state: any) => {
    const networkId = networkIdSelector(state)
    const contractFavorites = contractFavoritesByFilterSelector(state, { favorite: true })
    const feeds = feedsByFilterSelector(state, { networkId })
    const favoriteIds = new Set(contractFavorites.map((f) => f.id))
    const favoriteFeeds = contractFavorites.map((f) => f.feed).filter((f) => !!f)
    favoriteFeeds.forEach((f) => f.hearted = true)
    feeds.forEach((f) => f.hearted = favoriteIds.has(f.id))

    return {
        networkId,
        feeds,
        favoriteFeeds,
        protocols
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setContractFavorite: (payload: SetContractFavoriteActionInput) => dispatch(setContractFavorite(payload)),
        setCacheKey: (payload: SetFeedCacheKeyActionInput) => dispatch(setFeedCacheKey(payload))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withFeedsCache
)(HomeView);