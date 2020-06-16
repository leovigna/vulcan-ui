import { connect } from "react-redux"
import { withParsedFeeds } from '../../hoc'
import HomeView from './HomeView'
import protocols from '../../data/protocols'
import { setContractFavorite } from '../../store/contractFavorite/actions'
import { SetContractFavoriteActionInput } from '../../store/contractFavorite/types'
import { contractFavoritesSelector, contractsByFilterSelector, contractStateSelector, networkIdSelector } from '../../store/selectors'

const mapStateToProps = (state: any) => {
    const networkId = networkIdSelector(state)
    const contractFavorites = new Set(contractFavoritesSelector(state).filter((n) => n.networkId === networkId && n.favorite).map((n) => n.address));
    const feeds = contractsByFilterSelector(state, { networkId })
    feeds.forEach((f) => f.hearted = false)
    const favoriteFeeds = feeds.filter((f) => contractFavorites.has(f.address))
    favoriteFeeds.forEach((f) => f.hearted = true)

    return {
        networkId,
        contractStates: contractStateSelector(state),
        feeds,
        favoriteFeeds,
        protocols
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setContractFavorite: (payload: SetContractFavoriteActionInput) => dispatch(setContractFavorite(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withParsedFeeds(HomeView));