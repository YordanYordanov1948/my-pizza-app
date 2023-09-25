import React, { useState } from 'react';
import HomePage from "./components/HomePage/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import OrderModal from './components/OrderSummary/OrderModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toppings, setToppings] = useState([]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const resetPizza = () => setToppings([]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onReset={resetPizza} />
      <div className="flex-1">
        <HomePage toppings={toppings} setToppings={setToppings} />
      </div>
      <div className="flex-initial">
        <OrderSummary toppings={toppings} toggleModal={toggleModal} />
      </div>
      {isModalOpen && <OrderModal onClose={toggleModal} toppings={toppings} resetPizza={resetPizza} />}
    </div>
  );
}

export default App;
