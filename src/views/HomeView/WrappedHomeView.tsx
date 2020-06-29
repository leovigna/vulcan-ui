import { connect } from "react-redux"
import { compose, flattenProp } from 'recompose'
import { withFeedsCache, withNetworkId, withFeeds, withProtocols, withDrizzleContext, withFavoriteFeeds, withSetContractFavorite, withSetCacheKey, withFeedsWithState, withFeedsRefresh, withRefreshFeeds, refreshOnUpdate } from '../../hoc'
import HomeView from './HomeView'

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

export default compose(
    withSetContractFavorite,
    withSetCacheKey,
    withNetworkId,
    withProtocols,
    withFeeds,
    withFavoriteFeeds,
    withDrizzleContext,
    withFeedsCache,
    withRefreshFeeds,
    refreshOnUpdate,
    connect(mapStateToProps, mapDispatchToProps)
)(HomeView);