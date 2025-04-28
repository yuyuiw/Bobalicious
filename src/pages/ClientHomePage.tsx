import { Link } from "react-router";
import Navbar from "../components/ClientNavbar";

const ClientHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-pink-100 min-h-screen p-8">
        <div className="flex flex-col mb-8">
          <h2 className="italic text-2xl mb-5 self-center">Welcome!</h2>
          <p className="text-xl max-w-5xl mx-auto mb-5">
            Craving a burst of flavor with a side of fun? Welcome to <strong>Bobalicious</strong>, your new go-to spot for all things boba—delivered straight to your door. We’re a bubble tea company on a mission to turn your daily sip into a moment of joy. Whether you're a tapioca traditionalist or a popping pearl pioneer, we’ve got something deliciously unique just for you.
          </p>
        </div>

        <div className="flex justify-center gap-15">
          <Link
            to="/cart"
            className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-70 h-85 flex flex-col items-center justify-center text-center shadow-md hover:opacity-90 transition"
          >
            <div className="font-bold text-lg mb-2">My Cart</div>
            <div className="text-sm">See what's in your cup.</div>
          </Link>

          <Link
            to="/client-catalog"
            className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-70 h-85 flex flex-col items-center justify-center text-center shadow-md hover:opacity-90 transition"
          >
            <div className="font-bold text-lg mb-2">Boba Menu</div>
            <div className="text-sm">Check out our exotic flavors!</div>
          </Link>

          <Link
            to="/profile"
            className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-70 h-85 flex flex-col items-center justify-center text-center shadow-md hover:opacity-90 transition"
          >
            <div className="font-bold text-lg mb-2">Profile</div>
            <div className="text-sm">Edit your account details.</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClientHomePage;
