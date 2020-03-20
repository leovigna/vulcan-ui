import { call, put, takeEvery } from 'redux-saga/effects'

// actions
export const ADD_CUSTOM_CONTRACT = 'VULCAN/ADD_CUSTOM_CONTRACT'

// reducers
export const customContractsReducer = (state = [], action) => {
    if (action.type === ADD_CUSTOM_CONTRACT) {
        // update your state
        return [...state, action.contract]
    }
    return state
}