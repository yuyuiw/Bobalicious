import React, { useState } from 'react';
import ClientNavbar from '../components/ClientNavbar';
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router";

interface EditProfileProps {
  name: string;
  address: string;
  onSave: (newName: string, newAddress: string) => void;
}

const EditProfilePage: React.FC<EditProfileProps> = ({
  name,
  address,
  onSave,
}) => {
  const [newName, setNewName] = useState(name);
  const [newAddress, setNewAddress] = useState(address);
    const navigate = useNavigate(); 
  

  return (
    <div className="text-center min-h-screen flex flex-col">
        <ClientNavbar />

        <div className="flex justify-end items-center px-8 py-4">
                    <button
                    onClick={async () => {
                    try {
                        await auth.signOut();
                        navigate("/");
                        setTimeout(() => {
                            navigate("/");
                        }, 500);
                    } catch (error) {
                        console.error("Error signing out:", error);
                    }
                    }}
                    className="button-black hover:bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg transition cursor-pointer"
                    >
                        Sign Out
                    </button>
                </div>

        {/*Main page content*/}
        <div>
            <h1 className="font-bold text-4xl italic pb-3">Profile</h1>

            <div className="flex flex-col items-center w-full p-8 text-left text-2xl space-y-8">
                {/*edit info*/}
                <label className="block font-normal w-100 text-2xl text-[#1E1E1E]">
                    Name
                    <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="bg-white w-full border border-[#D9D9D9] rounded-md p-3 mt-3 text-xl focus:outline-none focus:ring-2 focus:ring-[#CBE3BA]"
                    />
                </label>

                <label className="block font-normal w-100 text-2xl text-[#1E1E1E]">
                    Delivery Address
                    <input
                        type="text"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        className="bg-white w-full border border-[#D9D9D9] rounded-md p-3 mt-3 text-xl focus:outline-none focus:ring-2 focus:ring-[#CBE3BA]"
                    />
                </label>
            
                </div>
                
                <div>
                    <button className="bg-[#2C2C2C] text-white w-70 h-20 rounded-xl text-base text-xl font-medium mx-auto mt-6 shadow-md hover:bg-[#1f1f1f] transition self-center"
                    onClick={() => onSave(newName, newAddress)}>
                    Save Changes
                    </button>
                </div>

        </div>
    </div>
)};

export default EditProfilePage;
