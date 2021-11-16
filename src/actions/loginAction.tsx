import { loginAuthGoogle } from '../firebase/firebaseConfig';
import { ReducerTypes } from './types';

export const login = () => async (dispatch: any) => {
    try {
        const data = await loginAuthGoogle();
        let infoUser = [];
        infoUser.push({
            userId: data.user?.uid,
            mail: data.user?.email,
        })
        dispatch({ 
            type: ReducerTypes.LOGIN_USER, 
            payload: infoUser[0]
        });

    } catch (error) {
        dispatch( {
            type: ReducerTypes.SET_ERROR,
            payload: console.log(error), //TODO: modal por error
        })
        console.log(error);
    } 
}

export const logout = () => async (dispatch: any) => {
    dispatch({ 
            type: ReducerTypes.LOGOUT_USER, 
        });

}