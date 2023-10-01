import React, { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import OrderSummary from './components/OrderSummary/OrderSummary';
import OrderModal from './components/OrderSummary/OrderModal';


// App.js
function App() {
  const [toppings, setToppings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);  // new state to manage modal visibility

  const resetPizza = () => setToppings([]);
  
  const setPizzaToppings = (newToppings) => {
    setToppings(newToppings);
  };

  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar onReset={resetPizza} setPizzaToppings={setPizzaToppings} setIsModalOpen={setIsModalOpen} />
      <div className="flex-1">
        <HomePage toppings={toppings} setToppings={setToppings} isModalOpen={isModalOpen} />
      </div>
      <div className="flex-initial">
        <OrderSummary toppings={toppings} setIsModalOpen={setIsModalOpen} />
      </div>
      {isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} resetPizza={resetPizza} />}

    </div>
    
  );
}


export default App;
