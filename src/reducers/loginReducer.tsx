import initialState from './initialState';
import { ReducerTypes }  from '../actions/types';

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ReducerTypes.LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                loading: false 
            };
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
export default loginReducer;
