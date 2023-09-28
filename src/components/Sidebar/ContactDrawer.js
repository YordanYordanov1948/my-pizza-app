import React from 'react';

const ContactDrawer = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg w-1/2 shadow-lg relative">
          <button
            className="text-gray-600 hover:text-gray-900 absolute right-4 top-4"
            onClick={onClose}
          >
            Close
          </button>

          <h2 className="text-2xl mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input className="border rounded w-full py-2 px-3" type="email" placeholder="Email" />
            <input className="border rounded w-full py-2 px-3" type="text" placeholder="Subject" />
            <textarea className="border rounded w-full py-2 px-3" rows="4" placeholder="Message"></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ContactDrawer;
