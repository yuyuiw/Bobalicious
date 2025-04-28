import { Link } from "react-router";
import Navbar from "../components/ClientNavbar";

const VendorHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-pink-100 min-h-screen p-8">
        <div className="text-center mb-8">
          <h2 className="italic text-2xl mb-4">Welcome, Vendor!</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Manage your menu, track orders, and serve up smiles. Let’s make every boba drop unforgettable!
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <Link
            to="/vendor-catalog"
            className="bg-gray-800 text-white rounded-2xl p-6 w-60 h-85 flex flex-col items-center justify-center text-center shadow-md hover:bg-gray-700 transition"
          >
            <div className="font-bold text-lg mb-1">Menu</div>
            <div className="text-sm">Manage your boba creations</div>
          </Link>

          <Link
            to="/"
            className="bg-gray-800 text-white rounded-2xl p-6 w-60 h-85 flex flex-col items-center justify-center text-center shadow-md hover:bg-gray-700 transition"
          >
            <div className="font-bold text-lg mb-1">Sign Out</div>
            <div className="text-sm">Logout of your account</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VendorHomePage;
