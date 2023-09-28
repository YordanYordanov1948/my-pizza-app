import React, { useState } from 'react';
import ContactDrawer from './ContactDrawer';  // Import the ContactDrawer component

const Sidebar = ({ onReset }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col bg-blue-700 text-white w-64 p-8 h-screen">
      <h1 className="text-3xl mb-8 font-bold">Pizza Builder</h1>

      <button className="mb-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded">Login</button>
      <button className="mb-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded">Signup</button>

      <nav>
        <ul className="text-lg">
          <li className="mb-4 hover:text-blue-300"><a href="#premade">Choose Premade Pizza</a></li>
          <li className="mb-4 hover:text-blue-300"><a href="#offers">Special Offers</a></li>
          <li className="mb-4 hover:text-blue-300" onClick={() => setDrawerOpen(true)}>Contact</li>
        </ul>
      </nav>

      {/* Contact Drawer */}
      <ContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <button onClick={() => { onReset(); }} className="mt-auto bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded">
        Reset Pizza
      </button>
    </div>
  );
};

export default Sidebar;
