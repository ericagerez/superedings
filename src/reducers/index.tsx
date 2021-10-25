import {combineReducers} from 'redux';
import superHeroesReducer from './superHeroesReducer';

export default combineReducers({
    superHeroesReducer: superHeroesReducer,
});