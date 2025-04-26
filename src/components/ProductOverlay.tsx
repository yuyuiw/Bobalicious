import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Boba } from '../firebase/types/types';

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
    const navigate = useNavigate();
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
    
        navigate('/cart', {
          state: {
            bobaOrder: { ...boba, quantity },
          },
        });

        handleCloseReset();
      };

    if (!boba) return null; 

    return (
        <Modal open={open} onClose={handleClose} className="flex justify-center items-center">
            <div className="bg-stone-100 min-w-120 max-w-[80%] p-8 text-black rounded-md">
                <div className="flex relative justify-center">
                    <CloseIcon 
                        onClick={handleClose}
                        className="absolute left-0 cursor-pointer" />
                    <h2 className="text-center text-5xl mt-8 mb-6">{boba.name}</h2>
                </div>

                <img src={boba.imageURL} className="object-cover rounded-lg w-60 h-60 mx-auto" />

                <div className="my-5 mx-4 text-left">
                    <p className="my-1"><span className="text-red-300 font-semibold">price: </span>${boba.price}</p>
                    <p className="my-1"><span className="text-red-300 font-semibold">description: </span>{boba.description}</p>
                    <p className="my-1"><span className="text-red-300 font-semibold">ingredients: </span>
                        {boba.ingredients.map((ingredient) => (
                        <span className = "flex gap-1">
                            - {ingredient}
                        </span>
                        ))}
                    </p>
                </div>

                <div className="flex row justify-center items-center mt-8">
                    <p className="m-5"><span className="text-red-300 font-bold">qty: </span>{quantity}</p>
                    <Button onClick={increaseQty} sx={{ backgroundColor: '#F7DCE3', color: 'black', margin: '2px' }} variant="contained"><AddIcon /></Button>
                    <Button onClick={decreaseQty} sx={{ backgroundColor: '#F7DCE3', color: 'black', margin: '2px' }} variant="contained"><RemoveIcon /></Button>
                </div>
                <div className="flex justify-center m-1">
                    <Button onClick={handleAddToCart} sx={{ backgroundColor: 'black', color: '#F7DCE3' }} variant="contained">Add to cart</Button>
                </div>
            </div>  
        </Modal>
    )
};

export default ProductOverlay;