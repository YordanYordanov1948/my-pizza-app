import React from 'react';

const PremadePizzaModal = ({ isOpen, onClose, setPizzaToppings }) => {

  if (!isOpen) return null;

  const pizzas = [
    { name: 'Margherita', toppings: ['tomato', 'cheese', 'basil'] }, // These should match with the types you've defined in HomePage
    { name: 'Pepperoni', toppings: ['tomato', 'cheese', 'pepperoni'] },
  ];

  const selectPizza = (selectedToppings) => {
    let newToppings = [];
  
    for (let i = 0; i < 5; i++) {
      selectedToppings.forEach(type => {
        newToppings.push({
          id: new Date().getTime() + i,
          type,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
        });
      });
    }
  
    setPizzaToppings(newToppings);
    onClose();
  };
  
  
  

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-1/2 shadow-lg">
        <button onClick={onClose} className="float-right bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full">Close</button>
        <h2 className="text-2xl mb-4 font-semibold text-gray-800">Choose a Premade Pizza</h2>
        <ul>
          {pizzas.map((pizza, index) => (
            <li key={index} className="mb-4 border-b pb-4">
              <h3 className="text-xl font-medium text-gray-700">{pizza.name}</h3>
              <p className="text-gray-800">Toppings: {pizza.toppings.join(', ')}</p>
              <button onClick={() => selectPizza(pizza.toppings)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Select</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PremadePizzaModal;
