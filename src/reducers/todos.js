import { call, put, takeEvery } from 'redux-saga/effects'

// actions
export const TODOS_FETCH = 'VULCAN/TODOS_FETCH'
export const TODOS_RECEIVED = 'VULCAN/TODOS_RECEIVED'

// reducers
export const todosReducer = (state = [], action) => {
    if (action.type === TODOS_RECEIVED) {
        // update your state
        return action.todos
    }
    return state
}

// fetch data from service using sagas
export function* fetchTodos() {
    const todos = yield fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
    yield put({ type: TODOS_RECEIVED, todos })
}

// Combine all your redux concerns

// app root saga
export function* todosRootSaga() {
    yield takeEvery(TODOS_FETCH, fetchTodos)
}