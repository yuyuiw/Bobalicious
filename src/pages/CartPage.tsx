import React, { useState } from 'react';
import Navbar from '../components/ClientNavbar';

import { useCart } from '../CartContext';

const CartPage: React.FC = () => {
  const { cart, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  // for Isabella
  // use {cart} to access the entire cart and the items in it are destructured as {boba, quantity}
  // use clearCart 

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center">
        {!checkedOut ? (
          <div className="mt-10 w-200">
            <h2 className="text-3xl font-semibold mb-4 italic text-center">Shopping Cart</h2>
            <div className="mb-4">
              <label className="block mb-2">Delivery Type:</label>
              <select className="w-50 p-2 border border-gray-300 rounded bg-white cursor-pointer">
                <option>In-Store Pick Up</option>
                <option>Delivery</option>
              </select>
            </div>

            <div className="bg-white p-4 shadow-2xl rounded flex flex-row">
              <img src="taro.webp" alt="Taro Tea" className="mb-2 w-40 me-10"/>
              <div className="flex flex-col">
                  <h3 className="text-md text-3xl mb-5">Taro Tea</h3>
                  <p>
                  <text className="text-red-600 font-semibold italic">Price:</text> $3.99
                  </p>
                  <p>
                  <text className="text-red-600 font-semibold italic">Description:</text> Yummy! It’s so good, yummy!
                  </p>
              </div>
            </div>

            <button className="mt-6 w-full bg-gray-800 text-white py-3 rounded cursor-pointer" onClick={() => setCheckedOut(true)}>
              Checkout
            </button>
          </div>
        ) : (
          <div className="mt-20 flex flex-col items-center">
            <h2 className="text-xl mb-6">Thank you for your purchase.</h2>
            <p className="mt-6 w-full bg-gray-800 text-white py-3 rounded text-center cursor-pointer">
              Sign Out
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;