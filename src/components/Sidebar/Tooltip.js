import React from 'react';

const Tooltip = ({ offers }) => {
    return (
      <div className="absolute top-full left-0 bg-white text-black p-4 rounded">
        <ul>
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Tooltip;
  