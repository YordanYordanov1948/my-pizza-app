import React, { useState } from 'react';

const OrderModal = ({ onClose, resetPizza }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleAddCustomData = () => {
    setName('John Doe');
    setEmail('johndoe@example.com');
    setPhone('123-456-7890');
    setAddress('123 Main St, Springfield');
    setPaymentMethod('card');
    setCardNumber('4111 1111 1111 1111');
    setExpiryDate('01/25');
    setCVV('123');
  };
  

  const handleConfirmAndPay = () => {
    if (paymentMethod === 'card') {
      alert('Payment processed! Your pizza is on its way 🍕');
    } else {
      alert('Please pay in cash upon delivery 🍕');
    }
    
    // Reset the pizza
    resetPizza();

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-1/2 shadow-lg">
        <button className="text-gray-600 hover:text-gray-900 absolute right-4 top-4" onClick={onClose}>Close</button>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Confirm Order</h2>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddCustomData}>
            Add Custom Data
          </button>
        </div>
        
        {/* Inputs and Labels */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        
        <div className="mb-4">
          <span className="text-gray-700 font-bold">Payment Method: </span>
          <label className="ml-2 font-normal">
            <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
            Card
          </label>
          <label className="ml-2 font-normal">
            <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
            Cash
          </label>
        </div>

        {paymentMethod === 'card' && (
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <input 
                placeholder="Card Number" 
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)} 
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 mr-2" 
              />
              <input 
                placeholder="Expiry Date" 
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 ml-2" 
              />
            </div>
            <input 
              placeholder="CVV" 
              type="text"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/4" 
            />
          </div>
        )}
        
        <div className="flex justify-between mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
            Cancel Order
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleConfirmAndPay}>
            Confirm and Pay
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default OrderModal;
