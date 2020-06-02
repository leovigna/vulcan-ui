import { connect } from "react-redux"
import { withParsedFeeds } from '../../hoc'
import ProtocolView from './ProtocolView'
import protocols from '../../data/protocols'
import { contractsSelector, contractStateSelector } from '../../store/selectors'

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
    const feeds = name === 'chainlink' ? contractsSelector(state) : []
    return {
        contractStates: contractStateSelector(state),
        feeds,
        protocols,
        ...protocol
    }
}

export default connect(mapStateToProps)(withParsedFeeds(ProtocolView));