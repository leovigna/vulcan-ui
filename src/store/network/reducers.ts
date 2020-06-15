import { Network, SET_NETWORK_ID } from './types'

type Action = {
    type: string,
    payload: any,
    [key: string]: any
}

const networks: Array<Network> = [
    {
        id: '1',
        name: 'Mainnet'
    },
    {
        id: '3',
        name: 'Ropsten'
    }
]

export function networksReducer(state = networks, action: Action) {
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