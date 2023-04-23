import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../services/user.service";

const SignIn = () => {
  const [email, setEmail] = useState("exterry@gmail.com");
  const [password, setPassword] = useState("b6lk#B8Z");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = e => {
    e.preventDefault();
    Auth.signIn(email, password, err => {
      if (err) {
        setError(err.message);
      } else {
        navigate("/myprofile");
      }
    });
  };

  return (
    <div className="w-2/4 max-w-2xl mx-auto">
      <h1 className="text-3xl">Sign In</h1>
      {error && <p className="mt-6 text-red-800">{error}</p>}
      <form onSubmit={handleSignIn}>
        <div className="my-6">
          <label>
            Email:
            <input
              type="email"
              className="mt-1 block w-full"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-6">
          <label>
            Password:
            <input
              type="password"
              className="mt-1 block w-full"
              placeholder="password"
              value={email}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="btn-primary" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
