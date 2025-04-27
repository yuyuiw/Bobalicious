import { collection, Firestore, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { Boba } from "../types/boba";

export async function getBoba(db: Firestore): Promise<Boba[]> {
    // get all the boba from firebase
    // return a list of boba objects
    const bobaCol = collection(db, 'boba');
    const userSnapshot = await getDocs(bobaCol);
    const bobaList = userSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Boba));
    return bobaList;
}

export async function addBoba(db: Firestore, item: Omit<Boba, 'id'>) {
    try {
      const docRef = await addDoc(collection(db, 'boba'), item);
      return { id: docRef.id, ...item } as Boba;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
}

export async function deleteBoba(db: Firestore, id: string) {
    try {
        await deleteDoc(doc(db, 'boba', id));
        console.log("Document deleted with ID: ", id);
      } catch (e) {
        console.error("Error deleting document: ", e);
        throw e;
      }
}