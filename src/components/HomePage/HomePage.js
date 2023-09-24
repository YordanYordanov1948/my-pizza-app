import React, { useState } from 'react';

const HomePage = () => {
  const [toppings, setToppings] = useState([]);

  const addTopping = (type) => {
    const newTopping = {
      id: new Date().getTime(),
      type: type,
    };
    setToppings([...toppings, newTopping]);
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* Outer Crust */}
      <div className="w-96 h-96 bg-yellow-500 rounded-full flex items-center justify-center p-6">
        {/* Inner Cheese */}
        <div className="w-full h-full bg-yellow-300 rounded-full flex items-center justify-center p-4">
          {/* Sauce */}
          <div className="w-full h-full bg-red-400 rounded-full relative">
            {/* Render the toppings */}
            {toppings.map((topping) => (
              <div
                key={topping.id}
                className={`absolute rounded-full ${topping.type === 'cheese' ? 'bg-yellow-200 w-4 h-4' : ''} ${topping.type === 'pepperoni' ? 'bg-red-600 w-5 h-5' : ''} ${topping.type === 'olives' ? 'bg-green-600 w-2 h-2' : ''}`}
                // Additional logic for the position of each topping could go here
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
