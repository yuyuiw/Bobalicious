import { db } from "../firebase/firebase";
import { useState } from "react";
import { Boba } from "../types/boba";
import { addBoba } from "../firebase/bobaFuncs";
import CloseIcon from "@mui/icons-material/Close";


interface AddItemOverlayProps {
  onClose: () => void;
  onItemAdded: (newItem: Boba) => void;
}

export const AddItemOverlay = ({ onClose, onItemAdded }: AddItemOverlayProps) => {
  const [newItem, setNewItem] = useState<Omit<Boba, 'id'>>({
    name: '',
    imageURL: '',
    price: '',
    description: '',
    ingredients: []
  });
  const [currentIngredient, setCurrentIngredient] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setNewItem(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, currentIngredient.trim()]
      }));
      setCurrentIngredient('');
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setNewItem(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async () => {
    try {
      const addedItem = await addBoba(db, newItem);
      onItemAdded(addedItem);
      onClose();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return(
    <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}} className="flex justify-center">
      <div className="bg-white p-6 rounded-lg w-[50%] relative my-10">
        <button
          className="button-black text-neutral-100 px-1 w-min h-min rounded-lg flex justify-self-end cursor-pointer"
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
          name="name"
          placeholder="Name"
          className="w-full border rounded-lg p-2 mb-2 border-gray-300"
          value={newItem.name}
          onChange={handleInputChange}
          required
        />

        <p className="text-[25px] mb-3">Image URL:</p>
        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          className="w-full border rounded-lg p-2 mb-2 border-gray-300"
          value={newItem.imageURL}
          onChange={handleInputChange}
          required
        />

        <p className="text-[25px] mb-3">Price:</p>
        <input
          type="text"
          name="price"
          placeholder="Price Value"
          className="w-full border rounded-lg p-2 mb-2 border-gray-300"
          value={newItem.price}
          onChange={handleInputChange}
          required
        />

        <p className="text-[25px] mb-3">Description:</p>
        <input
          type="text"
          name="description"
          placeholder="Enter description here"
          className="w-full border rounded-lg p-2 mb-2 border-gray-300"
          value={newItem.description}
          onChange={handleInputChange}
          required
        />

        <p className="text-[25px] mb-3">Ingredients:</p>
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

        {newItem.ingredients.length > 0 && (
          <div className="mb-4">
            <p>Added Ingredients</p>
            <ul>
              {newItem.ingredients.map((ingredient, index) => (
                <div key={index} className="flex">
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="button-black text-neutral-100 px-1 w-min h-min rounded-lg mr-2 cursor-pointer"
                  >
                    <CloseIcon/>
                  </button>
                  <li>{ingredient}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
        

        <button
          type="submit"
          className="bg-[#2C2C2C] mx-auto block text-neutral-100 px-4 py-2 rounded-lg cursor-pointer"
        >
          Done
        </button>
      </div>
    </form>
  )
};

export default AddItemOverlay;