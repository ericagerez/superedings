import initialState from './initialState';
import { ReducerTypes }  from '../actions/types';

const superHeroesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ReducerTypes.SET_ALL_SUPERHEROES:
            return {
                ...state,
                superheroes: [...state.superheroes, action.payload],
                loading: false };
        case ReducerTypes.SET_ERROR:
            return {
                ...state, 
                errorMessage: action.payload,
                loading: false 
            };
        default:
            return state;
    }
};
export default superHeroesReducer;

