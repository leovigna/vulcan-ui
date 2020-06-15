import { attr } from 'redux-orm';
import { Model } from 'redux-orm';

interface ContractFavorite {
    networkId: string,
    address: string,
    favorite: boolean
}

class ContractFavorite extends Model {
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'address',
    };
}

ContractFavorite.modelName = 'ContractFavorite';

// Declare your related fields.
ContractFavorite.fields = {
    address: attr(),
    networkId: attr(),
    favorite: attr(),
};



export default ContractFavorite;