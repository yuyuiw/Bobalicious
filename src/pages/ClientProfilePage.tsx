import React, {useEffect, useState } from "react";
import EditProfilePage from "../pages/EditProfilePage";
import Navbar from "../components/ClientNavbar";
import { auth } from "../firebase/firebase";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router";


const ClientProfilePage: React.FC = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;

            if(user) {
                const db = getFirestore();
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()) {
                    const userData = docSnap.data();
                    setName(userData.name || "");

                    if(userData.address) {
                        setAddress(userData.address);
                    }

                }
            }
        };

        fetchUserData();
    }, []);

    if(isEditing) {
        return (
            <EditProfilePage
                name={name}
                address={address}
                onSave={async (newName: string, newAddress: string) => {
                    setName(newName);
                    setAddress(newAddress);
                    setIsEditing(false);

                    const user = auth.currentUser;
                    const db = getFirestore();

                    if(user) {
                        const userDocRef = doc(db, "users", user.uid);
                        await updateDoc(userDocRef, {
                            name: newName,
                            address: newAddress,
                        });
                    }
                }}
             />
        );
    }
    return (
    <div className="text-center flex flex-col">
        {/* Sign Out Button */}
        <Navbar />

        {/*Main page content*/}
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
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl italic pb-[2vh]">Profile</h1>

            {/*Info box*/}
            <div className="bg-white min-w-1/2 p-4 shadow-md my-4 text-3xl">
                <div className="flex flex-row pb-[5vh] pt-[5vh] px-[2vw]">
                    <p className="font-bold pr-[1vw] whitespace-nowrap">Name: </p>
                    <p className="text-left">{name}</p>
                </div>

                <div className="flex flex-row pb-[10vh] px-[2vw]">
                    <p className="font-bold pr-[1vw] whitespace-nowrap">Delivery Address: </p>
                    <p className="text-left">{address}</p>
                </div>
            </div>

            <button className="bg-[#2C2C2C] text-white w-70 h-20 rounded-xl text-base font-medium text-lg mx-auto mt-6 shadow-md hover:bg-[#1f1f1f] transition cursor-pointer"
            onClick={() => setIsEditing(true)}>
                Edit
            </button>
        </div>
    </div>
    );
}

export default ClientProfilePage;