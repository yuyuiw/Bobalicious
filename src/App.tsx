import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import OpeningPage from './pages/OpeningPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ClientHomePage from './pages/ClientHomePage';
import CartPage from './pages/CartPage';
import ClientCatalog from './pages/ClientCatalogPage';
import ClientProfilePage from './pages/ClientProfilePage';
import VendorHomePage from './pages/VendorHomePage';
import VendorCatalogPage from './pages/VendorCatalogPage';

import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/client-home" element={<ClientHomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/client-catalog" element={<ClientCatalog />}/>
        <Route path="/profile" element={<ClientProfilePage />}/>
        <Route path="/vendor-home" element={<VendorHomePage />}/>
        <Route path="/vendor-catalog" element={<VendorCatalogPage />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
