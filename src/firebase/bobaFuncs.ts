import { collection, Firestore, getDocs} from "firebase/firestore";

export type BobaItem = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageURL: string;
  };

export async function getBoba(db: Firestore) {
    const bobaCol = collection(db, 'boba');
    const userSnapshot = await getDocs(bobaCol);
    // const bobaList = userSnapshot.docs.map((doc) => doc.data());
    const bobaList = userSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})) as BobaItem[]; // to add the unique doc id as a field
    return bobaList;
    
    // get all the boba from firebase
    // return a list of boba objects
}

//getBobaDrink - to specifically get it's price, etc.
//removeBoba

//The point of this is so that we can use this functions in any page! 
//Can edit boba, and also just access them more efficiently