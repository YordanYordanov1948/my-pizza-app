import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginModal = ({ isOpen, onClose, setUsername, setIsUserLoggedIn }) => {
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      console.log("Logged in:", response.data);
      setUsername(response.data.username); 
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  
  useEffect(() => {
    if (isLoggedIn) {
      setIsUserLoggedIn(true);  
      const timer = setTimeout(() => {
        onClose();
        setIsLoggedIn(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, onClose, setIsUserLoggedIn]);
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
        {isLoggedIn ? (
          <div>
            <h2 className="text-black text-2xl mb-4">Welcome Back!</h2>
            <p>You have successfully logged in.</p>
            {/* Modal will close automatically after 3 seconds */}
          </div>
        ) : (
          <>
            <h2 className="text-black text-2xl mb-4">Login</h2>
            <input 
              className="w-full p-2 mb-4 rounded border border-gray-300 text-black"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              className="w-full p-2 mb-4 rounded border border-gray-300 text-black"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
            <button 
              className="w-full p-2 mb-4 rounded bg-blue-500 text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            <button 
              className="w-full p-2 rounded bg-gray-500 text-white"
              onClick={onClose}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
