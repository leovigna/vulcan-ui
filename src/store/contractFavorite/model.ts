import { attr, oneToOne } from 'redux-orm';
import { Model } from 'redux-orm';

class ContractFavoriteModel extends Model {
}

ContractFavoriteModel.modelName = 'ContractFavorite';

// Declare your related fields.
ContractFavoriteModel.fields = {
    id: oneToOne({
        to: 'Feed',
        as: 'feed'
    }),
    address: attr(),
    networkId: attr(),
    favorite: attr(),
};



export default ContractFavoriteModel;