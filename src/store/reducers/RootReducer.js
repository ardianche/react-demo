import { combineReducers } from 'redux';
import product from './product';
import user from './user';

export default combineReducers({
    product,
    user,
});