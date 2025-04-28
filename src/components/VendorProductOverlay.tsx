import { Boba } from "../types/boba";
import { db } from "../firebase/firebase";
import { useState } from "react";

// Material UI
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ProductOverlayProps {
  open: boolean;
  boba: Boba | null;
  handleClose: () => void;
}

const VendorProductOverlay = ({
  open,
  boba,
  handleClose,
}: ProductOverlayProps) => {
  if (!boba) return null;

  const handleRemoveIngredient = (index: number) => {
    setNewItem((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [newItem, setNewItem] = useState<Omit<Boba, "id">>({
    name: "",
    imageURL: "",
    price: "",
    description: "",
    ingredients: [],
  });
  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setNewItem((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, currentIngredient.trim()],
      }));
      setCurrentIngredient("");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex justify-center items-center"
    >
      <div className="bg-stone-100 min-w-120 max-w-[80%] p-8 text-black rounded-md">
        <div className="flex justify-self-end">
          <CloseIcon onClick={handleClose} className="cursor-pointer" />
        </div>
        <h2 className="flex justify-center text-center text-5xl mb-6">
          {boba.name}
        </h2>
        <img
          src={boba.imageURL}
          className="object-cover rounded-lg w-60 h-60 mx-auto"
        />

        <div className="my-5 mx-4 text-left">
          <p className="my-1">
            <span className="text-red-300 font-semibold">Price: </span>$
            <input
              type="Price: "
              className="border border-solid border-neutral-200 rounded-md bg-white p-2 w-1/3"
              placeholder={boba.price}
            />
          </p>
          <p className="my-1">
            <span className="text-red-300 font-semibold">Description: </span>
            <input
              type="Description: "
              className="border border-solid border-neutral-200 rounded-md bg-white p-2 w-1/3"
              placeholder={boba.description}
            />
          </p>
          <p className="my-1">
            <span className="text-red-300 font-semibold">Image URL: </span>
            <input
              type="Image URL: "
              className="border border-solid border-neutral-200 rounded-md bg-white p-2 w-1/3"
              placeholder={boba.imageURL}
            />
          </p>
          <p className="my-1">
            <span className="text-red-300 font-semibold">Ingredients: </span>
          </p>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add ingredient"
              className="flex-1 border rounded-lg p-2 border-gray-300"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 rounded-lg cursor-pointer"
              onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
          </div>
          <div>
            {boba.ingredients.length > 0 && (
              <div className="mb-4">
                <ul>
                  {boba.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex my-2 ml-5">
                      <button
                        type="button"
                        onClick={() => handleRemoveIngredient(index)}
                        className="button-black text-neutral-100 px-1 w-min h-min rounded-lg mr-2 cursor-pointer"
                      >
                        <CloseIcon />
                      </button>
                      <li>{ingredient}</li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleClose}
              className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 rounded-lg mx-15 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VendorProductOverlay;
