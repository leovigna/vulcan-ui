import { generateStore } from '@drizzle/store'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import drizzleOptions from "../drizzleOptions"
//import { loadLocalStorage, saveLocalStorage } from "./localstorage"
import { transactionRootSaga, blocksRootSaga, eventsRootSaga } from "./sagas";
import { ormReducer, networkIdReducer } from './reducers';
import { networksReducer } from './network/reducers'
import { coinbaseRootSaga } from './coinbase/sagas'
import { feedsRootSaga } from './feed/sagas'
import { latestBlockReducer } from './block/reducers'

const persistedWhitelist: string[] = []
/*
if (process.env.NODE_ENV === 'production') {
    persistedWhitelist.push('orm')
}
*/
const persistConfig = {
    key: 'persisted',
    storage,
    whitelist: persistedWhitelist
}

const appReducers = {
    persisted: persistReducer(persistConfig, combineReducers({
        orm: ormReducer
    })),
    networks: networksReducer,
    networkId: networkIdReducer,
    latestBlock: latestBlockReducer
}

const appSagas = [/* , , contractRootSaga,*/ coinbaseRootSaga, feedsRootSaga, eventsRootSaga, transactionRootSaga, blocksRootSaga]
//const appMiddlewares = [actionDebugger, eventAddNotifier, contractAddNotifier]
const config = {
    drizzleOptions,
    appReducers,
    appSagas,
    //appMiddlewares,
    disableReduxDevTools: false // enable ReduxDevTools!
}

//@ts-ignore
const store = generateStore(config)

export const persistor = persistStore(store);
export default store;