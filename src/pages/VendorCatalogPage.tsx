import { db } from "../firebase/firebase";
import { deleteBoba } from "../firebase/bobaFuncs";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Boba } from "../types/boba";
import VendorNavbar from "../components/VendorNavbar";
import AddItemOverlay from "../components/AddItemOverlay";
import VendorProductOverlay from "../components/VendorProductOverlay";
import CloseIcon from "@mui/icons-material/Close";

const VendorCatalogPage = () => {
  const [bobaList, setBobaList] = useState<Boba[]>([]);
  const [addItemOverlay, setAddItemOverlay] = useState(false);
  const [selectedBoba, setBoba] = useState<Boba | null>(null);
  const [openModal, setOpen] = useState(false);
  
  const handleOpenModal = (boba: Boba) => {
      setBoba(boba);
      setOpen(true);
  }

  const handleCloseModal = () => {
      setBoba(null);
      setOpen(false);
  }

  useEffect(() => {
    const listener = onSnapshot(collection(db, "boba"), (snapshot) => {
      const data: Boba[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Boba[];
      setBobaList(data);
    });
    return () => listener();
  }, []);

  const handleItemAdded = (newItem: Boba) => {
    setBobaList(prev => [...prev, newItem]);
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteBoba(db, id);
      setBobaList(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className="flex flex-col">
      <VendorNavbar />
      {addItemOverlay && (<AddItemOverlay onClose={() => setAddItemOverlay(false)} onItemAdded={handleItemAdded} />)}

      {!addItemOverlay && (
        <>
        <h1 className="flex justify-center text-3xl pt-10">
          <i>
            <b>Edit Menu</b>
          </i>
        </h1>

        <div className="p-4">
          <button
            type="button"
            onClick={() => setAddItemOverlay(true)}
            className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 rounded-lg mx-15 cursor-pointer"
          >
            Add Item
          </button>
          
          <br />

          <div className="flex flex-col items-center gap-4 mb-5">
            {bobaList.map((boba) => (
              <div 
                key={boba.id} 
                className="bg-white mx-15 rounded-md shadow-md p-4 gap-4 items-center min-w-160 cursor-pointer"
                onClick={() => handleOpenModal(boba as Boba)}
              >
                <div className="flex flex-row gap-3">
                  <img
                    src={boba.imageURL}
                    className="w-24 h-24 object-cover rounded-lg"
                  ></img>

                  <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full">
                      <h2 className="text-[25px] mb-3">{boba.name}</h2>
                      <button
                        type="button"
                        className="button-black text-neutral-100 px-1 w-min h-min rounded-lg cursor-pointer"
                        onClick={() => handleDeleteItem(boba.id!)}
                      >
                        <CloseIcon />
                      </button>
                    </div>

                    <h3>
                      <span className="font-semibold text-red-300">Price: </span>
                      {'$' + boba.price}
                    </h3>
                    <h3>
                      <span className="font-semibold text-red-300">
                        Description:{" "}
                      </span>
                      {boba.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <VendorProductOverlay
                open={openModal}
                boba={selectedBoba}
                handleClose={handleCloseModal}
            />
        </div>
        </>
      )}
      
    </div>
  );
};
export default VendorCatalogPage;
