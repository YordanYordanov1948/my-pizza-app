import React from 'react';
import Toppings from '../Toppings/Toppings';

const getToppingClass = (type) => {
  switch (type) {
    case 'cheese': return 'bg-yellow-200 w-4 h-4';
    case 'pepperoni': return 'bg-red-600 w-5 h-5';
    case 'olives': return 'bg-gray-600 w-2 h-2';
    case 'pickles': return 'bg-green-700 w-2 h-2';
    case 'tomato': return 'bg-red-400 w-5 h-5';
    case 'basil': return 'bg-green-600 w-2 h-6';
    default: return '';
  }
};

const HomePage = ({ toppings, setToppings, isModalOpen }) => {
  
  const addTopping = (type) => {
    const newTopping = {
      id: new Date().getTime(),
      type,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    };
    setToppings(prevToppings => [...prevToppings, newTopping]);
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div className="mr-8">
          <Toppings addTopping={addTopping} />
        </div>
        <div className="w-96 h-96 bg-yellow-500 rounded-full flex items-center justify-center p-6">
          <div className="w-full h-full bg-yellow-300 rounded-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-red-400 rounded-full relative">
              {!isModalOpen && toppings.map(({ id, type, x, y }) => (
                <div
                  key={id}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className={`absolute rounded-full ${getToppingClass(type)}`}
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
