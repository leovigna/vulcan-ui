import { EventActions } from "@drizzle/store"
import { TX_FETCH, TX_RECEIVED } from "./reducers/txcache"
import { BLOCK_FETCH, BLOCK_RECEIVED } from "./reducers/blocks"


export const contractEventNotifier = store => next => action => {
    if (action.type === EventActions.EVENT_FIRED) {
        const contract = action.name
        const contractEvent = action.event

        console.debug(`${contract} ${contractEvent}`)
    }
    return next(action)
}

export const contractAddNotifier = store => next => action => {
    if (action.type === "CONTRACT_INITIALIZED") {
        // interact with your service
        console.log("Contract initialized fired", action)
    } else if (action.type === "CONTRACT_INITIALIZING") {
        // interact with your service
        console.log("Contract initializing fired", action)
    } else if (action.type === EventActions.EVENT_FIRED) {
        if (action.event.event === "ResponseReceived") {
            const transactionHash = action.event.transactionHash
            store.dispatch({ type: TX_FETCH, transactionHash })
        }
    } else if (action.type === TX_RECEIVED) {
        const block = action.tx.blockNumber;
        if (!store.getState().blocks[block]) store.dispatch({ type: BLOCK_FETCH, block });
    } else if (action.type !== "ACCOUNT_BALANCE_FETCHED" &&
        action.type !== "ACCOUNTS_FETCHED" && action.type !== "SYNCING_ACCOUNTS") {
        console.log(action.type)
    }
    return next(action)
}
