import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [role, setRole] = useState('Vendor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: your signup logic here
    console.log({ role, email, password });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Bobalicious</h1>
          <p className="signup-subtitle">Sign‑Up</p>
        </div>

        <p className="signup-motto">*** Sweetness lies ahead... ***</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="role">I am a…</label>
          <select
            id="role"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="Vendor">Vendor</option>
            <option value="Customer">Customer</option>
          </select>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Value"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Value"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
