import { Event, EventByContractTypeIndex } from '../../orm/models'
import {
    CREATE_EVENT,
    FETCH_EVENT,
    CREATE_EVENT_CT_INDEX,
    CreateEventAction,
    FetchEventAction,
    CreateEventByContractTypeIndexAction
} from './types'


export function createEvent(data: Event): CreateEventAction {
    return {
        type: CREATE_EVENT,
        payload: data
    }
}

export function fetchEvent(data: Event): FetchEventAction {
    return {
        type: FETCH_EVENT,
        payload: data
    }
}

export function createEventIndex(data: EventByContractTypeIndex): CreateEventByContractTypeIndexAction {
    return {
        type: CREATE_EVENT_CT_INDEX,
        payload: data
    }
}
