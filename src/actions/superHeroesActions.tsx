import { ReducerTypes } from './types';
import DataService from '../services/service';

export const getAllSuperHeroes = () => async (dispatch: any) => {
    try{
        const res = await DataService.getAllSuperHeroes();
        dispatch( {
            type: ReducerTypes.SET_ALL_SUPERHEROES,
            payload: res
        })
    }
    catch(err){
        dispatch( {
            type: ReducerTypes.SET_ERROR,
            payload: console.log(err),
        })
        console.log(err);
    }
}
