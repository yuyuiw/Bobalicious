import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/ClientNavbar';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth, db } from '../firebase/firebase.ts'; 
import { doc, setDoc } from 'firebase/firestore'; 

const SignupPage: React.FC = () => {
  const [role, setRole] = useState('Vendor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Remove this line if not needed after implementing firebase auth
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save role to Firestore
      await setDoc(doc(db, "users", user.uid), {
        role: role,
        email: email
      });

      console.log({ role, email, password });
      
      if (role === "Vendor") {
        navigate("/vendor-home");
      } else {
        navigate("/client-home");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />

    <div className="flex flex-col justify-center items-center">
      <p className="flex justify-center text-2xl my-5 italic">*** Sweetness lies ahead... ***</p>

      <form className="flex flex-col gap-1 w-3/4" onSubmit={handleSubmit}>

        <label htmlFor="email" className="text-2xl">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-solid border-neutral-200 rounded-md bg-white p-2"
          required
        />
        <br/>

        <label htmlFor="password" className="text-2xl">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-solid border-neutral-200 rounded-md bg-white p-2"
          required
        />
        <br/>

        <label htmlFor="role" className="text-2xl">I am a…</label>
        <select
          id="role"
          value={role}
          onChange={e => setRole(e.target.value)}
          className="border border-solid border-neutral-200 rounded-md bg-white p-2 w-1/3"
        >
          <option value="Vendor" className="box-border m-0 p-0">Vendor</option>
          <option value="Customer" className="box-border m-0 p-0">Customer</option>
        </select>
        <br/>

        <button 
          type="submit" 
          className="w-full p-3 text-2xl bg-black button-black text-white rounded-md cursor-pointer transition duration-200 ease-in-out hover:opacity-90"
          onClick={() => {}} 
        >
          {/* Adjust/change onClick function above to deal with firebase auth */}
          Sign Up
        </button>
      </form>
      </div>
    </div>
  );
};

export default SignupPage;
