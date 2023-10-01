import React from 'react';

const toppingPrices = {
  cheese: 1,
  pepperoni: 1.5,
  olives: 1,
  pickles: 0.5,
  tomato: 1,
  basil: 2

};

// Helper function to count topping occurrences
const countToppings = (toppings) => {
  const counts = {};
  toppings.forEach((topping) => {
    counts[topping.type] = (counts[topping.type] || 0) + 1;
  });
  return counts;
};

const OrderSummary = ({ toppings, toggleModal }) => {

  const toppingCounts = countToppings(toppings);

  // Calculate the total price
  const totalPrice = toppings.reduce((total, topping) => {
    return total + toppingPrices[topping.type];
  }, 0);

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul>
        {Object.entries(toppingCounts).map(([type, count]) => (
          <li key={type}>
            {type} x{count} - ${toppingPrices[type] * count}
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <div>
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded" onClick={toggleModal} >
        Confirm Order
      </button>
    </div>
  );
};

export default OrderSummary;
