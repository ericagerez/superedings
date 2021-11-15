import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import ModalActions from '../components/modals/ModalActions';

const useFirebase = (collection: string) => {

    const [firebaseDocuments, setFirebaseDocuments] = useState<Array<any>>([]);

    useEffect(() => {
        getAll();
    }, []);

    const save = (values: any) => {
        return db.collection(collection).doc().set(values).then(() => {
            alert("Guardado correctamente.")
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