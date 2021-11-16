import {combineReducers} from 'redux';
import superHeroesReducer from './superHeroesReducer';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    superHeroesReducer: superHeroesReducer,
    loginReducer: loginReducer,
    modalReducer: modalReducer,
});