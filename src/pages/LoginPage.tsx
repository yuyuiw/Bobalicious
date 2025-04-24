import ClientNavbar from "../components/ClientNavbar";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col h-screen">
      <ClientNavbar />

      {/* Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-[10vw]">
        <form className="w-full max-w-[40vw] flex flex-col space-y-[2.5vh]">
          <div>
            <label className="block text-[1.2vw] mb-[1vh]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-[1vw] py-[1.5vh] bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-[1vw]"
            />
          </div>

          <div>
            <label className="block text-[1.2vw] mb-[1vh]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-[1vw] py-[1.5vh] bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-[1vw]"
            />
          </div>

          <div className="flex justify-between w-full max-w-[40vw] mt-[2vh] text-[1vw]">
            <a className="underline text-purple-800 cursor-pointer">
              Forgot password?
            </a>
            <a onClick={() => navigate("/signup")} className="underline text-black cursor-pointer">
              Sign Up
            </a>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-[1.5vh] rounded-md text-[1.2vw] hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>
        
        <br></br>
        <button
          type="button"
          onClick={() => navigate("/vendor-home")}
        >
          placeholder button to go to vendor view (click me)
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
