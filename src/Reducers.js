import { combineReducers } from 'redux';

const item = (state = [], action ) =>{ //storeItem
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
        {
            state.splice(action.id, 1);
            return [ ...state]
        }
        default:
            return state;
    }
};
export const reducers = combineReducers({
    items: item
})