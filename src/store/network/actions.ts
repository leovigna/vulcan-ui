import { Network, SET_NETWORK_ID } from './types'

export function setNetworkId(id: Network["id"]) {
    return {
        type: SET_NETWORK_ID,
        payload: id
    }
}