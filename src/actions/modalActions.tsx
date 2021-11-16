import { ReducerTypes } from './types';

export const setOpenModal = (open: boolean) => async (dispatch: any) => {
    dispatch({ 
            type: ReducerTypes.SET_OPEN_MODAL, 
            payload: open
        });

}