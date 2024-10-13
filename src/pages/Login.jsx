import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserToLocalStorage } from "../utils/localStorage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "") {
      setError("Username cannot be empty");
      return;
    }

    // Save username to localStorage
    saveUserToLocalStorage({
      username,
      tags: [],
      watched: [],
      watching: [],
      wishlist: [],
    });

    // Navigate to tag selection page or home page based on first login
    navigate("/tags");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-xs">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Enter your username"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
