import { db } from "../firebase/firebase"

import { getBoba } from "../firebase/bobaFuncs";
const bobaList = await getBoba(db);


const ProductPage = () => {
    return(
        <div className = "bg-pink-100 min-h-screen p-4">
        <h1 className = "text-[40px] font-bold italic text-center mt-5">Menu</h1>
        <hr className = "mb-10 mt-2 w-[40%] mx-auto"></hr>
        <div className = "flex flex-col gap-4">
            {bobaList.map((boba) => (
                <div className = "bg-white mx-15 rounded-md shadow-md p-4 gap-4 items-center">
                    <div className = "flex flex-row gap-3">
                        <img src={boba.imageURL} className = "w-24 h-24 object-cover rounded-lg"></img>
                        <div className = "flex flex-col">
                            <h2 className = "text-[25px] mb-3">{boba.name}</h2>
                            <h3><span className = "font-semibold text-red-300">price: </span>{boba.price}</h3>
                            <h3><span className = "font-semibold text-red-300">description: </span>{boba.description}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProductPage;


