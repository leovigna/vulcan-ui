import { SET_NETWORK_ID } from './types'
import networks from '../../data/networks'

type Action = {
    type: string,
    payload: any,
    [key: string]: any
}

export function networksReducer(state = networks /*, action: Action*/) {
    return state;
}

export function networkIdReducer(state = '1', action: Action) {
    switch (action.type) {
        case SET_NETWORK_ID:
            return action.payload
        default:
            return state
    }
}