import React from 'react';

const Toppings = ({ addTopping }) => {
  return (
    <div className="flex flex-col"> {/* Buttons in column layout */}
      <button onClick={() => addTopping('cheese')} className="bg-yellow-500 text-white px-4 py-2 rounded m-2">Add Cheese</button>
      <button onClick={() => addTopping('pepperoni')} className="bg-red-500 text-white px-4 py-2 rounded m-2">Add Pepperoni</button>
      <button onClick={() => addTopping('olives')} className="bg-green-500 text-white px-4 py-2 rounded m-2">Add Olives</button>
      <button onClick={() => addTopping('pickles')} className="bg-green-700 text-white px-4 py-2 rounded m-2">Add Pickles</button>
    </div>
  );
};

export default Toppings;
