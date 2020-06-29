import { ContractAction, CREATE_CONTRACT, UPDATE_CONTRACT, REMOVE_CONTRACT, UPDATE_CONTRACT_EVENTS } from "./types";
export function contractReducer(sess: any, action: ContractAction) {
    const { Contract } = sess;
    switch (action.type) {
        case CREATE_CONTRACT:
            Contract.create(action.payload);
            break;
        case UPDATE_CONTRACT:
            Contract.withId(action.payload.address).update(action.payload);
            break;
        case REMOVE_CONTRACT:
            Contract.withId(action.payload.address).delete();
            break;
        case UPDATE_CONTRACT_EVENTS:
            Contract.withId(action.payload.address).updated = true
            break;
    }

    return sess;
}
