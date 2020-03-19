import { generateStore } from '@drizzle/store'

import drizzleOptions from "./drizzleOptions"
//import { loadLocalStorage, saveLocalStorage } from "./localstorage"
import { contractEventNotifier, contractAddNotifier } from "./middleware"
import { txReducer, txRootSaga } from "./reducers/txcache";
import { todosReducer, todosRootSaga } from "./reducers/todos";
import { blocksReducer, blocksRootSaga } from "./reducers/blocks";

const appReducers = {
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