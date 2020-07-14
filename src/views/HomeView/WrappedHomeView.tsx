import { compose } from 'recompose'
import { withFeedsCache, withNetworkId, withFeeds, withProtocols, withDrizzleContext, withFavoriteFeeds, withSetContractFavorite, withSetCacheKey, withRefreshFeeds, withCurrentBlock } from '../../hoc'
import HomeView from './HomeView'

export default compose(
    withSetContractFavorite,
    withSetCacheKey,
    withNetworkId,
    withCurrentBlock,
    withProtocols,
    withFeeds,
    withFavoriteFeeds,
    withDrizzleContext,
    withFeedsCache,
    withRefreshFeeds,
    //refreshOnUpdate,
    //@ts-ignore
)(HomeView);