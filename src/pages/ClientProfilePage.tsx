import React, {useState } from "react";
import EditProfilePage from "../pages/EditProfilePage";
import Navbar from "../components/ClientNavbar";

const ClientProfilePage: React.FC = () => {
    const [name, setName] = useState("Jane Doe");
    const [address, setAddress] = useState("123 Pool Lane, College Park");
    const [isEditing, setIsEditing] = useState(false);

    if(isEditing) {
        return (
            <EditProfilePage
                name={name}
                address={address}
                onSave={(newName: string, newAddress: string) => {
                    setName(newName);
                    setAddress(newAddress);
                    setIsEditing(false);
                }}
             />
        );
    }
    return (
    <div className="text-center min-h-screen flex flex-col">
        <Navbar />

        {/*Main page content*/}
        <div className="bg-[#F7DCE3] min-h-screen">
            <h1 className="font-bold text-4xl pt-[5vh] italic pb-[2vh]">Profile</h1>

            {/*Info box*/}
            <div className="bg-white w-[90%] mx-auto p-4 shadow-md my-4 text-3xl">
                <div className="flex flex-row pb-[5vh] pt-[5vh] px-[2vw]">
                    <p className="font-bold pr-[1vw] whitespace-nowrap">Name: </p>
                    <p className="text-left">{name}</p>
                </div>

                <div className="flex flex-row pb-[10vh] px-[2vw]">
                    <p className="font-bold pr-[1vw] whitespace-nowrap">Delivery Address: </p>
                    <p className="text-left">{address}</p>
                </div>
            </div>

            <button className="bg-[#2C2C2C] text-white w-[315px] h-[71px] rounded-[20px] text-base font-medium mx-auto mt-6 shadow-md hover:bg-[#1f1f1f] transition"
            onClick={() => setIsEditing(true)}>
                Edit
                </button>

        </div>
    </div>
    );
}

export default ClientProfilePage;