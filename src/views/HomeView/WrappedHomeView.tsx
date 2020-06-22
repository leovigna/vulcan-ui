import { connect } from "react-redux"
import { compose } from 'recompose'
import { withFeedsCache, withNetworkId, withFeeds, withProtocols, withDrizzleContext, withFavoriteFeeds, withSetContractFavorite, withSetCacheKey } from '../../hoc'
import HomeView from './HomeView'

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

export default compose(
    withNetworkId,
    withFeeds,
    withFavoriteFeeds,
    withProtocols,
    withSetContractFavorite,
    withSetCacheKey,
    withDrizzleContext,
    withFeedsCache,
    connect(mapStateToProps, mapDispatchToProps)
)(HomeView);