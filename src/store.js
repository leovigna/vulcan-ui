import { generateStore } from '@drizzle/store'

import drizzleOptions from "./drizzleOptions"
//import { loadLocalStorage, saveLocalStorage } from "./localstorage"
import { contractEventNotifier, contractAddNotifier } from "./middleware"
import { txReducer, txRootSaga } from "./reducers/txcache";
import { todosReducer, todosRootSaga } from "./reducers/todos";
import { blocksReducer, blocksRootSaga } from "./reducers/blocks";
import { customContractsReducer } from "./reducers/customContracts";
import { neworkIdReducer } from "./reducers/web3";

import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'persisted',
    storage,
    whitelist: ['customContracts']
}

const appReducers = {
    persisted: persistReducer(persistConfig, combineReducers({
        customContracts: customContractsReducer,
    })),
    tx: txReducer,
    blocks: blocksReducer,
    web3: neworkIdReducer
}

const appSagas = [todosRootSaga, txRootSaga, blocksRootSaga]
const appMiddlewares = [contractEventNotifier, contractAddNotifier]
const config = {
    drizzleOptions,
    appReducers,
    appSagas,
    appMiddlewares,
    disableReduxDevTools: false // enable ReduxDevTools!
}
const store = generateStore(config)

export const persistor = persistStore(store);
export default store;