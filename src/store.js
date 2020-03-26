import { generateStore } from '@drizzle/store'

import drizzleOptions from "./drizzleOptions"
//import { loadLocalStorage, saveLocalStorage } from "./localstorage"
import { actionDebugger, eventAddNotifier, contractAddNotifier, transactionAddNotifier } from "./middleware"
import { transactionRootSaga } from "./reducers/transactions";
import { blocksRootSaga } from "./reducers/blocks";
import { customContractsReducer } from "./reducers/customContracts";
import { neworkIdReducer } from "./reducers/web3";
import { eventsRootSaga } from "./reducers/events";
import { ormReducer } from './reducers/orm';

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
    web3: neworkIdReducer,
    orm: ormReducer
}

const appSagas = [transactionRootSaga, blocksRootSaga, eventsRootSaga]
const appMiddlewares = [actionDebugger, eventAddNotifier, transactionAddNotifier, contractAddNotifier]
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