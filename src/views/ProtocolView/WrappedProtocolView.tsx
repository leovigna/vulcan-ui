import { compose, flattenProp } from 'recompose'
import { withNetworkId, withProtocol, withDrizzleContext, withSetContractFavorite, withSetCacheKey } from '../../hoc'
import ProtocolView from './ProtocolView'


export default compose(
    flattenProp('match'),
    flattenProp('params'),
    withSetContractFavorite,
    withSetCacheKey,
    withNetworkId,
    withProtocol,
    flattenProp('protocol'),
    withDrizzleContext,
    //@ts-ignore
)(ProtocolView);