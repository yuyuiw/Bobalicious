// Angela's task
import { Button, Modal } from '@mui/material';

/** we would need to import this for the whole project? Or I can use something else */
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductOverlay = () => {
    // placeholders 
    const image = "https://tyberrymuch.com/wp-content/uploads/2022/07/taro-milk-tea-recipe-1-735x735.jpg";
    const price = 5.00; // how to decimal if we want it?
    const description = "Purple and sweet";
    const ingredients = "Taro, milk, ice, boba";
    const quantity = 1;
    const open = true;

    return (
        <Modal open={open} className="flex justify-center items-center">
            <div className="bg-stone-100 w-120 p-8 text-black rounded-2xl">
                <div className="flex relative justify-center">
                    {/** Also allow close by clicking out of the modal? */}
                    <CloseIcon className="absolute left-0 m-0 cursor-pointer" />
                    <h2 className="text-center text-5xl mt-6 font-semibold">Taro Tea</h2>
                </div>

                {/** I can adjust the height to h-auto or whatever we want the dimensions to be later */}
                <img src={image} className="my-8 mx-auto w-5/6 h-60" />

                <div className="my-5 mx-4 text-left">
                    <p className="my-1"><span className="text-red-700 font-bold italic">Price: </span> ${price}</p>
                    <p className="my-1"><span className="text-red-700 font-bold">Description: </span> {description}</p>
                    <p className="my-1"><span className="text-red-700 font-bold">Ingredients: </span> {ingredients}</p>
                </div>

                {/** Do we want an edit button for vendor view? */}
                <div className="flex row justify-center items-center mt-8">
                    <p className="m-5"><span className="text-red-700 font-bold">Qty: </span>{quantity}</p>
                    <Button sx={{ backgroundColor: '#F7DCE3', color: 'black', margin: '2px' }} variant="contained"><AddIcon /></Button>
                    <Button sx={{ backgroundColor: '#F7DCE3', color: 'black', margin: '2px' }} variant="contained"><RemoveIcon /></Button>
                </div>
                <div className="flex justify-center m-1">
                    <Button sx={{ backgroundColor: 'black', color: '#F7DCE3' }} variant="contained">Add to cart</Button>
                </div>
            </div>  
        </Modal>
    )
};

export default ProductOverlay;