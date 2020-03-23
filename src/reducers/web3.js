export const NETWORK_ID_CHANGED = 'VULCAN/NETWORK_ID_CHANGED'
// reducers
export const neworkIdReducer = (state = {}, action) => {
    switch (action.type) {
        case NETWORK_ID_CHANGED:
            const networkId = action.networkId
            return { ...state, networkId }
        default:
            return state
    }
}
