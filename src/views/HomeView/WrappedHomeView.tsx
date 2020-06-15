import { connect } from "react-redux"
import { withParsedFeeds } from '../../hoc'
import HomeView from './HomeView'
import protocols from '../../data/protocols'
import { contractsSelector, contractsByFilterSelector, contractStateSelector, networkIdSelector } from '../../store/selectors'

const mapStateToProps = (state: any) => {
    const networkId = networkIdSelector(state)

    return {
        networkId,
        contractStates: contractStateSelector(state),
        //feeds: contractsSelector(state),
        feeds: contractsByFilterSelector(state, { networkId }),
        protocols
    }
}

export default connect(mapStateToProps)(withParsedFeeds(HomeView));