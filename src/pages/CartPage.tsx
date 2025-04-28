import React, { useState } from 'react';
import Navbar from '../components/ClientNavbar';
import { useNavigate } from "react-router";
import { useCart } from '../CartContext';

const CartPage: React.FC = () => {
  const { cart, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center">
        {!checkedOut ? (
          <div className="mt-10 w-200">
            <h2 className="text-3xl font-semibold mb-4 italic text-center">Shopping Cart</h2>
            <div className="mb-4">
              <label className="block mb-2">Delivery Type:</label>
              <select className="w-50 p-2 border border-gray-300 rounded-lg bg-white cursor-pointer">
                <option>In-Store Pick Up</option>
                <option>Delivery</option>
              </select>
            </div>

          <div className="flex flex-col gap-4">
            {cart.map((item, index) => (
              Array.from({ length: item.quantity }).map((_, i) => (
              <div key = {`${index}-${i}`} className="bg-white p-4 shadow-2xl rounded-md flex flex-row">
                <img src={item.boba.imageURL} alt={item.boba.name} className="w-24 h-24 me-5 object-cover"/>
                
                <div className="flex flex-col">
                    <h2 className="text-md text-3xl mb-3">{item.boba.name}</h2>
                    <p>
                    <text className="text-red-300 font-semibold">Price:</text> ${item.boba.price}
                    </p>
                    <p>
                    <text className="text-red-300 font-semibold">Description:</text> {item.boba.description}
                    </p>
                </div>
              </div>
            ))
          ))}
          </div>
          <div className="flex justify-center mt-10 mb-10 w-full">
            <button
              className={`mt-6 w-60 h-15 py-3 rounded mt-20 mb-10
                ${cart.length === 0 ? "bg-[#2C2C2C] opacity-90 text-white cursor-not-allowed" : "button-black text-white cursor-pointer"}`}
              disabled={cart.length === 0}
              onClick={() => {
                if (cart.length > 0) {
                  clearCart();
                  setCheckedOut(true);
                }
              }}
            >
              Checkout
            </button>
          </div>
          </div>
        ) : (
          <div className="mt-20 flex flex-col items-center">
            <h2 className="text-xl mb-6">Thank you for your purchase.</h2>
            <p className="mt-6 w-full button-black text-white py-3 rounded text-center cursor-pointer" onClick={() => navigate("/")}>
              Sign Out
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;