import { db } from "../firebase/firebase"
import { useState } from "react";

import { getBoba } from "../firebase/bobaFuncs";
import Navbar from "../components/ClientNavbar";

const bobaList = await getBoba(db);
import ProductOverlay from "../components/ProductOverlay"

const ClientCatalogPage = () => {
    const [selectedBoba, setBoba] = useState(null);
    const [openModal, setOpen] = useState(false);
   
    const handleOpenModal = (boba) => {
        console.log(boba);
        setBoba(boba);
        setOpen(true);
    }

    const handleCloseModal = () => {
        setBoba(null);
        setOpen(false);
    }
   
    return(
        <div>
            <Navbar />
            <div className = "min-h-screen p-4">
            <h1 className = "text-[40px] font-semibold italic text-center mt-5">menu</h1>
            <hr className = "mb-10 mt-2 w-[40%] mx-auto"></hr>
            <div className = "flex flex-col gap-4">
                {bobaList.map((boba) => (
                    <div 
                        onClick={() => handleOpenModal(boba)}
                        className = "bg-white mx-15 rounded-md shadow-md p-4 gap-4 items-center">
                        <div className = "flex flex-row gap-3">
                            <img src={boba.imageURL} className = "w-24 h-24 x"></img>
                            <div className = "flex flex-col">
                                <h2 className = "text-[25px] mb-3">{boba.name}</h2>
                                <h3><span className = "font-semibold text-red-300">price: </span>$ {boba.price}</h3>
                                <h3><span className = "font-semibold text-red-300">description: </span>{boba.description}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ProductOverlay
                open={openModal}
                boba={selectedBoba}
                handleClose={handleCloseModal}
            />
            </div>
        </div>
    );
};

export default ClientCatalogPage;


