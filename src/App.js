import React, { useState } from 'react';
import HomePage from "./components/HomePage/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import './index.css';

function App() {
  const [toppings, setToppings] = useState([]);

  const resetPizza = () => {
    setToppings([]); // This will reset the pizza toppings
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onReset={resetPizza} />
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
