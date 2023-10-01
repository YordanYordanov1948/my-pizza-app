import React, { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import OrderSummary from './components/OrderSummary/OrderSummary';

function App() {
  const [toppings, setToppings] = useState([]);

  const resetPizza = () => setToppings([]);
  
  const setPizzaToppings = (newToppings) => {
    setToppings(newToppings);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onReset={resetPizza} setPizzaToppings={setPizzaToppings} />
      <div className="flex-1">
        <HomePage toppings={toppings} setToppings={setToppings} />
      </div>
      <div className="flex-initial">
        <OrderSummary toppings={toppings} />
      </div>
    </div>
  );
}

export default App;
