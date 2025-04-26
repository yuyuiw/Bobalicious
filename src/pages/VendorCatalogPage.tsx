import { db } from "../firebase/firebase";
import { getBoba } from "../firebase/bobaFuncs";
import CloseIcon from "@mui/icons-material/Close";
import VendorNavbar from "../components/VendorNavbar";
import { useEffect, useState } from "react";

//const bobaList = await getBoba(db);

const VendorCatalogPage = () => {
  const [bobaList, setBobaList] = useState<any[]>([]);
  const [addItemOverlay, setAddItemOverlay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBoba(db);
      setBobaList(data);
    };
    fetchData();
  }, []);

  function AddItemOverlay({
    onClose,
    onSubmit,
  }: {
    onClose: () => void;
    onSubmit: () => void;
  }) {
    return (
      <div
        className="fixed inset-0 flex justify-center items-center"
        style={{ backgroundColor: "#f7dce3" }}
      >
        <div className="absolute top-0 left-0 right-0">
          <VendorNavbar />
        </div>


        <div className="bg-white p-6 rounded-lg w-[50%] relative mt-30 mx-auto">
          <button
            className="absolute top-0 right-2 button-black text-neutral-100 px-1 w-min h-min rounded-lg"
            onClick={onClose}
          >
            <CloseIcon />
          </button>

          <h2 className="text-3xl font-bold mb-4 italic text-center">
            Add Item
          </h2>

          <p className="text-[25px] mb-3">Item Name:</p>
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded p-2 mb-2"
          />

          <p className="text-[25px] mb-3">Image URL:</p>
          <input
            type="text"
            placeholder="Image URL"
            className="w-full border rounded p-2 mb-2"
          />

          <p className="text-[25px] mb-3">Price:</p>
          <input
            type="text"
            placeholder="Price Value"
            className="w-full border rounded p-2 mb-2"
          />

          <p className="text-[25px] mb-3">Description:</p>
          <input
            type="text"
            placeholder="Enter description here"
            className="w-full border rounded p-2 mb-2"
          />

          <p className="text-[25px] mb-3">Ingredients:</p>
          <input
            type="text"
            placeholder="Enter description here"
            className="w-full border rounded p-2 mb-2"
          />

          <button
            type="button"
            className="bg-[#2C2C2C] mx-auto block text-neutral-100 px-4 py-2 rounded-lg"
            onClick={onSubmit}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <VendorNavbar />
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
            className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 rounded-lg"
          >
            Add Item
          </button>
        </div>

        {addItemOverlay && (
          <AddItemOverlay
            onClose={() => setAddItemOverlay(false)}
            onSubmit={() => {
              setAddItemOverlay(false);
            }}
          />
        )}

        <br />

        <div className="flex flex-col gap-4">
          {bobaList.map((boba) => (
            <div className="bg-white mx-15 rounded-md shadow-md p-4 gap-4 items-center">
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
                      className="button-black text-neutral-100 px-1 w-min h-min rounded-lg"
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
    </div>
  );
};
export default VendorCatalogPage;
