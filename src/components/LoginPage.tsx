import React from "react";

const LoginPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#F7DCE3] flex flex-col">
      {/* Header */}
      <div className="bg-[#CBE3BA] w-full py-[4vh] text-center">
        <h1 className="text-[3vw]" style={{ fontFamily: "'Lemonada', cursive" }}>
          Bobalicious
        </h1>
        <p className="text-[1.5vw] font-medium mt-[1vh]">Log-In</p>
      </div>

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

          <button
            type="submit"
            className="bg-black text-white py-[1.5vh] rounded-md text-[1.2vw] hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between w-full max-w-[40vw] mt-[2vh] text-[1vw]">
          <a href="#" className="underline text-purple-800">
            Forgot password?
          </a>
          <a href="#" className="underline text-black">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
