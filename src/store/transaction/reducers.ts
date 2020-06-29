import { TransactionAction, CREATE_TRANSACTION, UPDATE_TRANSACTION, REMOVE_TRANSACTION, FETCH_TRANSACTION } from "./types";
export function transactionReducer(sess: any, action: TransactionAction) {
    const { Transaction } = sess;
    switch (action.type) {
        case CREATE_TRANSACTION:
            Transaction.upsert({ ...action.payload });
            break;
        case UPDATE_TRANSACTION:
            Transaction.withId(action.payload.transactionHash).update({ ...action.payload });
            break;
        case REMOVE_TRANSACTION:
            Transaction.withId(action.payload.transactionHash).delete();
            break;
        case FETCH_TRANSACTION:
            break;
    }

    return sess;
}
