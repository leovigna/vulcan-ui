import { connect } from "react-redux"
import { compose } from 'recompose'
import { withParsedFeeds } from '../../hoc'
import HomeView from './HomeView'
import protocols from '../../data/protocols'
import { setContractFavorite } from '../../store/contractFavorite/actions'
import { SetContractFavoriteActionInput } from '../../store/contractFavorite/types'
import { contractFavoritesByFilterSelector, contractsByFilterSelector, contractStateSelector, networkIdSelector, feedsByFilterSelector } from '../../store/selectors'

const mapStateToProps = (state: any) => {
    const networkId = networkIdSelector(state)
    const contractFavorites = contractFavoritesByFilterSelector(state, { favorite: true })
    console.debug(contractFavorites)
    const feeds = feedsByFilterSelector(state, { networkId })
    const favoriteIds = new Set(contractFavorites.map((f) => f.id))
    const favoriteFeeds = contractFavorites.map((f) => f.feed).filter((f) => !!f)
    favoriteFeeds.forEach((f) => f.hearted = true)
    feeds.forEach((f) => f.hearted = favoriteIds.has(f.id))

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withParsedFeeds
)(HomeView);