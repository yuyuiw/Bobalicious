import ClientNavbar from "../components/ClientNavbar";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'; 
import { auth, db } from '../firebase/firebase.ts';
import { doc, getDoc } from "firebase/firestore";
import { FirebaseError } from 'firebase/app';
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // clear old errors
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const role = userDoc.data()?.role;

      if (role === "Vendor") {
        navigate("/vendor-home");
      } else {
        navigate("/client-home");
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          setErrorMessage('Incorrect email or password.');
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
      console.error("Login error:", error);
    }
  };

  const handleForgotPassword = async () => { 
    if (!email) {
      setErrorMessage('Please enter your email first.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setErrorMessage('Password reset email sent. Check your inbox.');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error("Forgot password error:", error);
      }
      setErrorMessage('Error sending password reset email.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <ClientNavbar />

      {/* Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-[15vw]">
        <form onSubmit={handleLogin} className="w-full flex flex-col space-y-[2.5vh]">
          {errorMessage && ( 
            <div className="text-red-500 text-center mb-4">
              {errorMessage}
            </div>
          )}

          <div className="mb-10">
            <label className="block mb-3 text-2xl" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-[1vw] py-[1.5vh] bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-3 text-2xl" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-[1vw] py-[1.5vh] bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex justify-between w-full mt-[2vh]">
            <button 
              type="button"
              onClick={handleForgotPassword} 
              className="underline text-purple-800 cursor-pointer bg-transparent border-none p-0 m-0 text-lg"
            >
              Forgot password?
            </button>

            <a onClick={() => navigate("/signup")} className="underline text-black cursor-pointer text-lg">
              Sign Up
            </a>
          </div>

          <span className="flex justify-center">
            <button
              type="submit"
              className="button-black text-white py-[1.5vh] rounded-lg hover:bg-gray-800 text-2xl w-2/3 cursor-pointer"
            >
              Sign In
            </button>
          </span>
          
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
