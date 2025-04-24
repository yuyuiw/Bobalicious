import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [role, setRole] = useState('Vendor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: your signup logic here
    console.log({ role, email, password });
  };

  return (
    <div className="signup-container box-border m-0 p-0">
      <div className="signup-card box-border m-0 p-0">
        <div className="signup-header box-border m-0 p-0">
          <h1>Bobalicious</h1>
          <p className="signup-subtitle box-border m-0 p-0">Sign‑Up</p>
        </div>

        <p className="signup-motto box-border m-0 p-0">*** Sweetness lies ahead... ***</p>

        <form className="signup-form box-border m-0 p-0" onSubmit={handleSubmit}>
          <label htmlFor="role" className="box-border m-0 p-0">I am a…</label>
          <select
            id="role"
            value={role}
            onChange={e => setRole(e.target.value)}
            className="box-border m-0 p-0"
          >
            <option value="Vendor" className="box-border m-0 p-0">Vendor</option>
            <option value="Customer" className="box-border m-0 p-0">Customer</option>
          </select>

          <label htmlFor="email" className="box-border m-0 p-0">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Value"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="box-border m-0 p-0"
            required
          />

          <label htmlFor="password" className="box-border m-0 p-0">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Value"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="box-border m-0 p-0"
            required
          />

          <button type="submit" className="signup-button box-border m-0 p-0">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
