import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ContactDrawer from './ContactDrawer';
import Tooltip from './Tooltip';
import PremadePizzaModal from './PremadePizzaModal';

const Sidebar = ({ onReset, setPizzaToppings, setIsModalOpen }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [username, setUsername] = useState('');


  const specialOffers = [
    "Offer 1: Buy one get one free",
    "Offer 2: 20% off on your first order",
    "Offer 3: Free delivery for orders above $50",
  ];

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');  // Remove the JWT from local storage
    setIsUserLoggedIn(false);  // Update the UI
    setUsername('');  // Clear the username
  };

  return (
    <div className="flex flex-col bg-blue-700 text-white w-64 p-8 h-screen">
      <h1 className="text-3xl mb-8 font-bold">Pizza Builder</h1>

      {isUserLoggedIn ? (
        <div className="flex flex-col items-start space-y-4 mb-4">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-300 h-8 w-8 rounded-full flex items-center justify-center text-2xl">😀</div>
            <span>{username || 'Anonymous'}</span>
          </div>
          <button onClick={handleLogout} className="mb-4 bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded">Logout</button>

        </div>
      ) : (
        <>
          <button onClick={() => setLoginModalOpen(true)} className="mb-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded">Login</button>
          <button onClick={() => setRegisterModalOpen(true)} className="mb-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded">Signup</button>
        </>
      )}

      <nav>
        <ul className="text-lg">
          <li className="mb-4 hover:text-blue-300 cursor-pointer" onClick={() => setModalOpen(true)}>Choose Premade Pizza</li>
          <li className="mb-4 hover:text-blue-300 cursor-pointer relative">
            <span onClick={() => setTooltipVisible(!tooltipVisible)}>Special Offers</span>
            {tooltipVisible && <Tooltip offers={specialOffers} />}
          </li>
          <li className="mb-4 hover:text-blue-300 cursor-pointer" onClick={() => setDrawerOpen(true)}>Contact</li>
        </ul>
      </nav>

      <ContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <PremadePizzaModal 
        isOpen={modalOpen && !loginModalOpen && !registerModalOpen} 
        onClose={() => { setModalOpen(false); setIsModalOpen(false); }} 
        setPizzaToppings={setPizzaToppings}
        onOpen={() => setIsModalOpen(true)}
      />

      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => { 
          setLoginModalOpen(false); 
        }}
        setUsername={setUsername}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />

      <RegisterModal 
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        setIsModalOpen={setIsModalOpen}
        setIsUserLoggedIn={setIsUserLoggedIn}
        setUsername={setUsername}
      />


      <button onClick={() => { onReset(); }} className="mt-auto bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded">
        Reset Pizza
      </button>
    </div>
  );
};

export default Sidebar;
