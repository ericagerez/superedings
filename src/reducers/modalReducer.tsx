import initialState from './initialState';
import { ReducerTypes }  from '../actions/types';

const modalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ReducerTypes.SET_OPEN_MODAL:
            return {
                ...state,
                openModal: action.payload,
            };
        default:
            return state;
    }
};
export default modalReducer;
