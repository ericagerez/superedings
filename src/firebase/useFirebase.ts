import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import {setOpenModal} from '../actions/modalActions';
import { useDispatch } from 'react-redux';

const useFirebase = (collection: string) => {

    const [firebaseDocuments, setFirebaseDocuments] = useState<Array<any>>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getAll();
    }, []);

    const save = (values: any) => {
        return db.collection(collection).doc().set(values).then(() => {
            dispatch(setOpenModal(true));
            setTimeout(function(){  dispatch(setOpenModal(false));; }, 3000);
        }).catch(() =>{
            alert("Lo sentimos, hubo un error al guardar.")
        });
    }

    const getAll = () => {
        return db.collection("comentarios").onSnapshot(querySnapshot => {
            const firebaseCollectionData : Array<any> = [];
            querySnapshot.forEach(firebaseDoc => {
                firebaseCollectionData.push({ ...firebaseDoc.data(), id: firebaseDoc.id });
            });
            setFirebaseDocuments(firebaseCollectionData);
        });
    };

    return {
        save,
        getAll,
        documents: firebaseDocuments
    }

}

export default useFirebase;