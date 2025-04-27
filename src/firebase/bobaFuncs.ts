import { collection, Firestore, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { BobaItem } from "../types/boba";

export async function getBoba(db: Firestore): Promise<BobaItem[]> {
    // get all the boba from firebase
    // return a list of boba objects
    const bobaCol = collection(db, 'boba');
    const userSnapshot = await getDocs(bobaCol);
    const bobaList = userSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BobaItem));
    return bobaList;
}

export async function addBobaItem(db: Firestore, item: Omit<BobaItem, 'id'>) {
    try {
      const docRef = await addDoc(collection(db, 'boba'), item);
      return { id: docRef.id, ...item } as BobaItem;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
}

export async function deleteBobaItem(db: Firestore, id: string) {
    try {
        await deleteDoc(doc(db, 'boba', id));
        console.log("Document deleted with ID: ", id);
      } catch (e) {
        console.error("Error deleting document: ", e);
        throw e;
      }
}