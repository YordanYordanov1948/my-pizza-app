import React, { useState } from 'react';
import ContactDrawer from './ContactDrawer';
import Tooltip from './Tooltip';
import PremadePizzaModal from './PremadePizzaModal';

const Sidebar = ({ onReset, setPizzaToppings }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);  // State for PremadePizzaModal

  const specialOffers = [
    "Offer 1: Buy one get one free",
    "Offer 2: 20% off on your first order",
    "Offer 3: Free delivery for orders above $50",
  ];

  return (
    <div className="flex flex-col bg-blue-700 text-white w-64 p-8 h-screen">
      <h1 className="text-3xl mb-8 font-bold">Pizza Builder</h1>

      <button className="mb-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded">Login</button>
      <button className="mb-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded">Signup</button>

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

      <PremadePizzaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} setPizzaToppings={setPizzaToppings} />


      <button onClick={() => { onReset(); }} className="mt-auto bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded">
        Reset Pizza
      </button>
    </div>
  );
};

export default Sidebar;
