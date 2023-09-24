import React from 'react';
import Toppings from '../Toppings/Toppings';

const HomePage = ({ toppings, setToppings }) => {

  const addTopping = (type) => {
    const newTopping = {
      id: new Date().getTime(),
      type: type,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    };
    setToppings([...toppings, newTopping]);
  };


  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="flex items-center">  {/* <-- Changed to flex row */}
        {/* Toppings Component */}
        <div className="mr-8">
          <Toppings addTopping={addTopping} />
        </div>

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
                    style={{ left: `${topping.x}%`, top: `${topping.y}%` }}
                    className={`absolute rounded-full 
                      ${topping.type === 'cheese' ? 'bg-yellow-200 w-4 h-4' : ''} 
                      ${topping.type === 'pepperoni' ? 'bg-red-600 w-5 h-5' : ''} 
                      ${topping.type === 'olives' ? 'bg-gray-600 w-2 h-2' : ''} 
                      ${topping.type === 'pickles' ? 'bg-green-700 w-2 h-2' : ''}`
                    }
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
