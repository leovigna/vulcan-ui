import { generateStore } from '@drizzle/store'

import drizzleOptions from "./drizzleOptions"
//import { loadLocalStorage, saveLocalStorage } from "./localstorage"
import { contractEventNotifier, contractAddNotifier } from "./middleware"
import { txReducer, txRootSaga } from "./reducers/txcache";
import { todosReducer, todosRootSaga } from "./reducers/todos";
import { blocksReducer, blocksRootSaga } from "./reducers/blocks";
import { customContractsReducer } from "./reducers/customContracts";

const appReducers = {
    customContracts: customContractsReducer,
    todos: todosReducer,
    tx: txReducer,
    blocks: blocksReducer
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
export default generateStore(config)