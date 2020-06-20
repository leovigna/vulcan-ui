import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Contract } from './types'

export const contractsSelector = createSelector(
    orm,
    (session) => {
        const contracts = session.Contract.all().toModelArray().map(item => {
            const { ref } = item;
            return {
                ...ref,
                answerRender: item.answerRender.bind(item),
                answerTransform: item.answerTransform.bind(item),
            };
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);