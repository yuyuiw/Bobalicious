import { db } from "../firebase/firebase";
import { getBoba, deleteBobaItem } from "../firebase/bobaFuncs";
import { useEffect, useState } from "react";
import { BobaItem } from "../types/boba";
import VendorNavbar from "../components/VendorNavbar";
import AddItemOverlay from "../components/AddItemOverlay";
import CloseIcon from "@mui/icons-material/Close";

const VendorCatalogPage = () => {
  const [bobaList, setBobaList] = useState<BobaItem[]>([]);
  const [addItemOverlay, setAddItemOverlay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBoba(db);
      setBobaList(data);
    };
    fetchData();
  }, []);

  const handleItemAdded = (newItem: BobaItem) => {
    setBobaList(prev => [...prev, newItem]);
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteBobaItem(db, id);
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
        <h1 className="flex justify-center text-2xl pt-10">
          <i>
            <b>Edit Menu</b>
          </i>
        </h1>

        <div className="min-h-screen p-4">
          <div>
            <button
              type="button"
              onClick={() => setAddItemOverlay(true)}
              className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 rounded-lg mx-15 cursor-pointer"
            >
              Add Item
            </button>
          </div>

          <br />

          <div className="flex flex-col gap-4">
            {bobaList.map((boba) => (
              <div key={boba.id} className="bg-white mx-15 rounded-md shadow-md p-4 gap-4 items-center">
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
                      <span className="font-semibold text-red-300">price: </span>
                      {boba.price}
                    </h3>
                    <h3>
                      <span className="font-semibold text-red-300">
                        description:{" "}
                      </span>
                      {boba.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
      )}
      
    </div>
  );
};
export default VendorCatalogPage;
