import { Link } from "react-router";
import Navbar from "../components/ClientNavbar";

const ClientHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-pink-100 min-h-screen p-8">
        <div className="text-center mb-8">
          <h2 className="italic text-2xl mb-4">Welcome!</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Craving a burst of flavor with a side of fun? Welcome to <strong>Bobalicious</strong>, your new go-to spot for all things boba—delivered straight to your door. We’re a bubble tea company on a mission to turn your daily sip into a moment of joy. Whether you're a tapioca traditionalist or a popping pearl pioneer, we’ve got something deliciously unique just for you.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <Link
            to="/cart"
            className="bg-gray-800 text-white rounded-2xl p-6 w-60 h-85 flex flex-col items-center justify-center text-center shadow-md hover:bg-gray-700 transition"
          >
            <div className="font-bold text-lg mb-1">My Cart</div>
            <div className="text-sm">See what's in your cup.</div>
          </Link>

          <Link
            to="/client-catalog"
            className="bg-gray-800 text-white rounded-2xl p-6 w-60 h-85 flex flex-col items-center justify-center text-center shadow-md hover:bg-gray-700 transition"
          >
            <div className="font-bold text-lg mb-1">Boba Menu</div>
            <div className="text-sm">Check out our exotic flavors!</div>
          </Link>

          <Link
            to="/profile"
            className="bg-gray-800 text-white rounded-2xl p-6 w-60 h-85 flex flex-col items-center justify-center text-center shadow-md hover:bg-gray-700 transition"
          >
            <div className="font-bold text-lg mb-1">Profile</div>
            <div className="text-sm">Edit your account details.</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClientHomePage;
