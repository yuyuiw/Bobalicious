import { Link } from "react-router";
import Navbar from "../components/ClientNavbar";

const VendorHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="italic text-2xl mb-4">Welcome, Vendor!</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Manage your menu, track orders, and serve up smiles. Let’s make every boba drop unforgettable!
          </p>
        </div>

        <div className="flex justify-center gap-20">
          <Link
            to="/vendor-catalog"
            className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-70 h-85 flex flex-col items-center justify-center text-center shadow-md hover:opacity-90 transition"
          >
            <div className="font-bold text-lg mb-1">Menu</div>
            <div className="text-sm">Manage your boba creations</div>
          </Link>

          <Link
            to="/"
            className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-70 h-85 flex flex-col items-center justify-center text-center shadow-md hover:opacity-90 transition"
          >
            <div className="font-bold text-lg mb-1">Sign Out</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VendorHomePage;
