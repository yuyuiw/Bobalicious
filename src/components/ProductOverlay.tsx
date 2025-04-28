import { useState } from 'react';
import { useCart } from '../CartContext';
import { Boba } from '../types/boba';

// Material UI
import { Button, Modal } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

interface ProductOverlayProps {
    open: boolean;
    boba: Boba | null;
    handleClose: () => void;
}

const ProductOverlay = ({ open, boba, handleClose }: ProductOverlayProps) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const resetQty = () => setQuantity(1);
    const increaseQty = () => setQuantity(quantity + 1);
    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleCloseReset = () => {
        resetQty();
        handleClose();
    };

    const handleAddToCart = () => {
        if (!boba) return;
        addToCart(boba, quantity);
        resetQty();
        handleCloseReset();
      };

    if (!boba) return null; 

    return (
        <Modal open={open} onClose={handleClose} className="flex justify-center items-center">
            <div className="bg-stone-100 min-w-120 max-w-[80%] p-8 text-black rounded-md">
                <div className="flex justify-self-end">
                    <CloseIcon 
                        onClick={handleClose}
                        className="cursor-pointer" 
                    />
                </div>
                <h2 className="flex justify-center text-center text-5xl mb-6">{boba.name}</h2>
                <img src={boba.imageURL} className="object-cover rounded-lg w-60 h-60 mx-auto" />

                <div className="my-5 mx-4 text-left">
                    <p className="my-1"><span className="text-red-300 font-semibold">Price: </span>${boba.price}</p>
                    <p className="my-1"><span className="text-red-300 font-semibold">Description: </span>{boba.description}</p>
                    <p className="my-1"><span className="text-red-300 font-semibold">Ingredients: </span>
                        {boba.ingredients.map((ingredient, index) => (
                        <span key = {index} className = "flex gap-1">
                            - {ingredient}
                        </span>
                        ))}
                    </p>
                </div>

                <div className="flex row justify-center items-center">
                    <p className="mr-5"><span className="text-red-300 font-bold">Qty: </span>{quantity}</p>
                    <Button onClick={increaseQty} sx={{ backgroundColor: '#F7DCE3', color: 'black', margin: '5px' }} variant="contained"><AddIcon /></Button>
                    <Button onClick={decreaseQty} sx={{ backgroundColor: '#F7DCE3', color: 'black', margin: '5px' }} variant="contained"><RemoveIcon /></Button>
                </div>
                <div className="flex justify-center mt-5">
                    <Button onClick={handleAddToCart} sx={{ backgroundColor: 'black', color: '#F7DCE3' }} variant="contained">Add to cart</Button>
                </div>
            </div>  
        </Modal>
    )
};

export default ProductOverlay;