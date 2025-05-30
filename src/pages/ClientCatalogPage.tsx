import { db } from "../firebase/firebase"
import { useState } from "react";

import { Boba } from '../types/boba';
import { getBoba } from "../firebase/bobaFuncs";
import Navbar from "../components/ClientNavbar";

const bobaList = await getBoba(db);
import ProductOverlay from "../components/ProductOverlay"

const ClientCatalogPage = () => {
    const [selectedBoba, setBoba] = useState<Boba | null>(null);
    const [openModal, setOpen] = useState(false);
   
    const handleOpenModal = (boba: Boba) => {
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
            <div className = "p-4">
            <h1 className = "text-3xl font-semibold italic text-center my-5 mb-10">Menu</h1>
            <div className = "flex flex-col gap-4 mb-5 items-center">
                {bobaList.map((boba) => (
                    <div 
                        onClick={() => handleOpenModal(boba as Boba)}
                        className = "bg-white mx-15 rounded-md shadow-md p-4 gap-4 items-center cursor-pointer min-w-160">
                        <div className = "flex flex-row gap-3">
                            <img src={boba.imageURL} className = "w-24 h-24 object-cover"></img>
                            <div className = "flex flex-col">
                                <h2 className = "text-[25px] mb-3">{boba.name}</h2>
                                <h3><span className = "font-semibold text-red-300">Price: </span>${boba.price}</h3>
                                <h3><span className = "font-semibold text-red-300">Description: </span>{boba.description}</h3>
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


