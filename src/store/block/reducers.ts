import { BlockAction, CREATE_BLOCK, UPDATE_BLOCK, REMOVE_BLOCK } from "./types";
export function blockReducer(sess: any, action: BlockAction) {
    const { Block } = sess;
    switch (action.type) {
        case CREATE_BLOCK:
            Block.upsert({ ...action.payload });
            break;
        case UPDATE_BLOCK:
            Block.withId(action.payload.blockNumber).update({ ...action.payload });
            break;
        case REMOVE_BLOCK:
            Block.withId(action.payload.blockNumber).delete();
            break;
    }

    return sess;
}
