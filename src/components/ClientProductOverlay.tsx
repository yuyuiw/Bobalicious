import { Boba } from '../types/boba';

// Material UI
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ProductOverlayProps {
    open: boolean;
    boba: Boba | null;
    handleClose: () => void;
}

const ProductOverlay = ({ open, boba, handleClose }: ProductOverlayProps) => {
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
                        {boba.ingredients.map((ingredient) => (
                        <span className = "flex gap-1">
                            - {ingredient}
                        </span>
                        ))}
                    </p>
                </div>
            </div>  
        </Modal>
    )
};

export default ProductOverlay;