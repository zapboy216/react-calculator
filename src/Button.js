import React from "react";

function Button({ id, label, onClick }) {
    return (
      <button
        id={id}
        aria-label={label}
        className="bg-gray-200 p-4 rounded text-xl focus:outline-none focus:bg-gray-300 border border-gray"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  

export default Button;

  
