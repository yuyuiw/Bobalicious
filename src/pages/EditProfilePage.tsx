import React, { useState } from 'react';

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

  return (
    <div className="text-center min-h-screen flex flex-col">
 
        {/*pretend navbar UI delete when actual navbar is made*/}
        <div className="bg-[#CBE3BA]">
            <h1 className="font-[Lemonada] text-white text-4xl pt-[3vh] font-normal">Bobalicious</h1>

            <div className="flex flex-row justify-center font-normal text-2xl pt-[1vh]">
                <p className="underline pl-[1vw] pr-[1vw]">Profile</p>
                <p>|</p>
                <p className="underline pl-[1vw] pr-[1vw]">Cart</p>
                <p>|</p>
                <p className="underline pl-[1vw] pr-[1vw]">Menu</p>
                <p>|</p>
                <p className="underline pl-[1vw] pr-[1vw]">Home</p>  
            </div>
        </div>

        {/*Main page content*/}
        <div className="bg-[#F7DCE3] min-h-screen">
            <h1 className="font-bold text-4xl pt-[5vh] italic pb-[2vh]">Profile</h1>

            <div className="w-[90%] pt-[5vh] mx-auto p-8 text-left text-2xl space-y-8">
                {/*edit info*/}
                <label className="block font-normal text-2xl text-[#1E1E1E]">
                    Name
                    <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="bg-white w-full border border-[#D9D9D9] rounded-md p-3 text-xl focus:outline-none focus:ring-2 focus:ring-[#CBE3BA]"
                    />
                </label>

                <label className="block font-normal text-2xl text-[#1E1E1E]">
                    Delivery Address
                    <input
                        type="text"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        className="bg-white w-full border border-[#D9D9D9] rounded-md p-3 text-xl focus:outline-none focus:ring-2 focus:ring-[#CBE3BA]"
                    />
                </label>
            
                </div>
                
                <div className="pt-[10vh]">
                    <button className="bg-[#2C2C2C] text-white w-[315px] h-[71px] rounded-[20px] text-base font-medium mx-auto mt-6 shadow-md hover:bg-[#1f1f1f] transition self-center"
                    onClick={() => onSave(newName, newAddress)}>
                    Save Changes
                    </button>
                </div>

        </div>
    </div>
)};

export default EditProfilePage;
