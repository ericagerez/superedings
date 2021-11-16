import {combineReducers} from 'redux';
import superHeroesReducer from './superHeroesReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    superHeroesReducer: superHeroesReducer,
    loginReducer: loginReducer,
});