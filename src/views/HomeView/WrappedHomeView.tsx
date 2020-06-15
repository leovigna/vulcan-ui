import { connect } from "react-redux"
import { withParsedFeeds } from '../../hoc'
import HomeView from './HomeView'
import protocols from '../../data/protocols'
import { contractsSelector, contractStateSelector } from '../../store/selectors'

const mapStateToProps = (state: any, { networkId }: Props) => {
    return {
        contractStates: contractStateSelector(state),
        feeds: contractsSelector(state),
        protocols
    }
}

export default connect(mapStateToProps)(withParsedFeeds(HomeView));