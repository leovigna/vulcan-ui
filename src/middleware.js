import { EventActions } from "@drizzle/store"
import { TX_FETCH, TX_RECEIVED } from "./reducers/txcache"
import { EVENT_FETCH, EVENT_ADDED } from "./reducers/events"
import { BLOCK_FETCH, BLOCK_RECEIVED } from "./reducers/blocks"
import { ropstenWeb3, mainnetWeb3 } from "./web3global"


export const contractEventNotifier = store => next => action => {
    if (action.type === EventActions.EVENT_FIRED || action.type === EventActions.EVENT_CHANGED) {
        //console.debug(`${action.type} ${action.name} ${action.event.event}`)
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
            const networkId = store.getState().web3?.networkId
            if (networkId === 1) {
                store.dispatch({ type: TX_FETCH, transactionHash, web3: mainnetWeb3 })
            } else if (networkId === 3) {
                store.dispatch({ type: TX_FETCH, transactionHash, web3: ropstenWeb3 })
            }
        }
    } else if (action.type === TX_RECEIVED) {
        const block = action.tx.blockNumber;
        if (!store.getState().blocks[block]) {
            const networkId = store.getState().web3?.networkId
            if (networkId === 1) {
                store.dispatch({ type: BLOCK_FETCH, block, web3: mainnetWeb3 });
            } else if (networkId === 3) {
                store.dispatch({ type: BLOCK_FETCH, block, web3: ropstenWeb3 });
            }
        }
    } else if (action.type !== "ACCOUNT_BALANCE_FETCHED" &&
        action.type !== "ACCOUNTS_FETCHED" && action.type !== "SYNCING_ACCOUNTS") {
        //console.debug(action.type)
    }
    return next(action)
}
