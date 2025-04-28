import { Boba } from "../types/boba";
import { db } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { updateBoba } from "../firebase/bobaFuncs";

// Material UI
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ProductOverlayProps {
  open: boolean;
  boba: Boba | null;
  handleClose: () => void;
}

const VendorProductOverlay = ({ open, boba, handleClose }: ProductOverlayProps) => {
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [updatedItem, setUpdatedItem] = useState<Omit<Boba, "id">>({
    name: "",
    price: "",
    description: "",
    imageURL: "",
    ingredients: []
  });

  useEffect(() => {
    if (boba) {
      setUpdatedItem({
        name: boba.name,
        price: boba.price,
        description: boba.description,
        imageURL: boba.imageURL,
        ingredients: boba.ingredients
      });
    }
  }, [boba]);

  if (!boba) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setUpdatedItem((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, currentIngredient.trim()],
      }));
      setCurrentIngredient("");
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setUpdatedItem((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    const updatedBoba = {
      ...boba,
      name: updatedItem.name,
      price: updatedItem.price,
      description: updatedItem.description,
      imageURL: updatedItem.imageURL,
      ingredients: updatedItem.ingredients,
    };

    try {
      await updateBoba(db, boba.id, updatedBoba); 
      handleClose(); 
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex justify-center items-center"
    >
      <div className="bg-stone-100 min-w-120 max-w-[80%] px-8 pt-8 text-black rounded-md">
        <div className="flex justify-self-end">
          <CloseIcon onClick={handleClose} className="cursor-pointer" />
        </div>

        <h1 className="text-2xl font-bold text-center my-4 mx-4">
          <span className="text-red-300 font-semibold">Item Name: </span>
          <input
            type="Item Name: "
            className="border border-solid border-neutral-200 rounded-md bg-white px-2 max-w-60"
            placeholder={boba.name}
            onChange={handleInputChange}
            name ="name"
            value={updatedItem.name}
          />
        </h1>

        <img
          src={boba.imageURL}
          className="object-cover rounded-lg w-60 h-60 mx-auto"
        />

        <div className="my-5 mx-4 text-left">
          <div className="my-2 flex items-center">
            <span className="text-red-300 font-semibold flex">Price: </span>
            <p className="ml-2">$</p>
            <input
              type="Price: "
              className="border border-solid border-neutral-200 rounded-md bg-white px-2 py-1 w-20 ml-1"
              placeholder={boba.price}
              name ="price"
              value={updatedItem.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-2 flex items-center">
            <span className="text-red-300 font-semibold">Description: </span>
            <input
              type="Description: "
              className="border border-solid border-neutral-200 rounded-md bg-white px-2 py-1 grow ml-1"
              placeholder={boba.description}
              name ="description"
              value={updatedItem.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-2 flex items-center">
            <span className="text-red-300 font-semibold">Image URL: </span>
            <input
              type="Image URL: "
              name="imageURL"
              value={updatedItem.imageURL}
              className="border border-solid border-neutral-200 rounded-md bg-white px-2 py-1 grow ml-1"
              placeholder={boba.imageURL}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-1">
            <span className="text-red-300 font-semibold">Ingredients: </span>
          </div>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add ingredient"
              className="flex-1 border rounded-lg px-2 border-gray-300"
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
            {updatedItem.ingredients.length > 0 && (
              <div className="mb-4">
                <ul>
                  {updatedItem.ingredients.map((ingredient, index) => (
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
              onClick={handleSubmit}
              className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 mb-3 rounded-lg cursor-pointer"
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
