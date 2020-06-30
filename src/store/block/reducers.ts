import { BlockAction, CREATE_BLOCK, UPDATE_BLOCK, REMOVE_BLOCK, LatestBlockAction, LATEST_BLOCK } from "./types";
export function blockReducer(sess: any, action: BlockAction) {
    const { Block } = sess;
    switch (action.type) {
        case CREATE_BLOCK:
            Block.upsert({ ...action.payload });
            break;
        case UPDATE_BLOCK:
            Block.withId(action.payload.number).update({ ...action.payload });
            break;
        case REMOVE_BLOCK:
            Block.withId(action.payload.number).delete();
            break;
    }

    return sess;
}

export function latestBlockReducer(state = {}, action: LatestBlockAction) {
    switch (action.type) {
        case LATEST_BLOCK:
            return { ...action.payload }
    }

    return state
}
