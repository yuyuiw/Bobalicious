import { db } from "../firebase/firebase";
import { getBoba } from "../firebase/bobaFuncs";
import CloseIcon from '@mui/icons-material/Close';
import VendorNavbar from "../components/VendorNavbar";
import { useState, useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';

const VendorCatalogPage = () => {
  type BobaItem = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageURL: string;
  };
  
  const [bobaList, setBobaList] = useState<BobaItem[]>([]);

  useEffect(() => {
    const fetchBoba = async () => {
      const boba = await getBoba(db);
      const mappedBoba = boba.map((doc) => ({
        id: doc.id,
        name: doc.name,
        price: doc.price,
        description: doc.description,
        imageURL: doc.imageURL
      })) as BobaItem[];
      setBobaList(mappedBoba);
    };
    fetchBoba();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "boba", id));
    setBobaList((prev) => prev.filter((boba) => boba.id !== id));
  };

  console.log("bobaList", bobaList);

  return(
    <div className="flex flex-col">
      <VendorNavbar />
      <h1 className="flex justify-center text-2xl pt-10"><i><b>Edit Menu</b></i></h1>

      <div className = "min-h-screen p-4">
        <div>
          <button type="button" className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 rounded-lg">Add Item</button>
        </div>
        <br/>

        <div className = "flex flex-col gap-4">
          {bobaList.map((boba) => (
            <div key={boba.id} className = "bg-white mx-15 rounded-md shadow-md p-4 gap-4 items-center">
              <div className = "flex flex-row gap-3">
                <img src={boba.imageURL} className = "w-24 h-24 object-cover rounded-lg"></img>
                
                <div className = "flex flex-col w-full">
                  
                  <div className="flex justify-between w-full">
                    <h2 className = "text-[25px] mb-3">{boba.name}</h2>
                    <button type="button" className="button-black text-neutral-100 px-1 w-min h-min rounded-lg cursor-pointer"
                    onClick={() => handleDelete(boba.id)}><CloseIcon/></button>
                  </div>
                    <h3><span className = "font-semibold text-red-300">price: </span>{boba.price}</h3>
                    <h3><span className = "font-semibold text-red-300">description: </span>{boba.description}</h3>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
    
    </div>
  )
}
export default VendorCatalogPage;