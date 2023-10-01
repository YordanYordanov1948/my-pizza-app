import React, { useState } from 'react';
import axios from 'axios';

const RegisterModal = ({ isOpen, onClose, setIsModalOpen, setIsUserLoggedIn, setUsername }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log("Registered:", response.data);
      
      if (response.data.user && response.data.user.username) {
        setUsername(response.data.user.username);
      }
  
      // Clear form data
      setFormData({ username: '', email: '', password: '' });
  
      // Update status and close modal
      setIsUserLoggedIn(true);
      setIsModalOpen(false);
      onClose();
  
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

      <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-black text-2xl mb-4">Register</h2>
        <input 
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={e => setFormData({ ...formData, username: e.target.value })}
        />
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
          onClick={handleRegister}
        >
          Register
        </button>
        <button 
          className="w-full p-2 rounded bg-gray-500 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
