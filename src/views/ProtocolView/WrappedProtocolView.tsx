import { connect } from "react-redux"
import { withParsedFeeds } from '../../hoc'
import ProtocolView from './ProtocolView'
import protocols from '../../data/protocols'
import { setContractFavorite } from '../../store/contractFavorite/actions'
import { SetContractFavoriteActionInput } from '../../store/contractFavorite/types'
import { contractFavoritesSelector, contractsByFilterSelector, contractStateSelector, networkIdSelector } from '../../store/selectors'

interface MatchProps {
    match: {
        params: {
            name: string
        }
    }
}

const mapStateToProps = (state: any, { match }: MatchProps) => {
    const name = match.params.name
    const protocol = protocols[name]

    const networkId = networkIdSelector(state)
    const contractFavorites = new Set(contractFavoritesSelector(state).filter((n) => n.networkId === networkId && n.favorite).map((n) => n.address));
    const feeds = contractsByFilterSelector(state, { networkId, protocol: name })
    feeds.forEach((f) => f.hearted = false)
    const favoriteFeeds = feeds.filter((f) => contractFavorites.has(f.address))
    favoriteFeeds.forEach((f) => { f.hearted = true })
    feeds.sort((a, b) => {
        return a.hearted ? -1 : (b.hearted ? 1 : 0);
    })

    return {
        networkId,
        contractStates: contractStateSelector(state),
        feeds,
        protocols,
        ...protocol
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setContractFavorite: (payload: SetContractFavoriteActionInput) => dispatch(setContractFavorite(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withParsedFeeds(ProtocolView));