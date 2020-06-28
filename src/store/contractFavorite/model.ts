import { attr, oneToOne } from 'redux-orm';
import { Model } from 'redux-orm';

class ContractFavorite extends Model {
}

ContractFavorite.modelName = 'ContractFavorite';

// Declare your related fields.
ContractFavorite.fields = {
    id: oneToOne({
        to: 'Feed',
        as: 'feed'
    }),
    address: attr(),
    networkId: attr(),
    favorite: attr(),
};



export default ContractFavorite;