import React from 'react';

const OrderSummary = ({ toppings }) => {
  const toppingCounts = {};

  // Count occurrences of each topping type
  toppings.forEach(topping => {
    if (toppingCounts[topping.type]) {
      toppingCounts[topping.type]++;
    } else {
      toppingCounts[topping.type] = 1;
    }
  });

  // Calculate the total price based on the toppings. Assume each topping adds $1 to the base price of $10
  const totalPrice = 10 + toppings.length;

  return (
    <div className="bg-white p-4 rounded shadow-lg w-64">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul>
        {Object.keys(toppingCounts).map(toppingType => (
          <li key={toppingType}>
            {toppingType} x {toppingCounts[toppingType]}
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Confirm Order
      </button>
    </div>
  );
};

export default OrderSummary;
