import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, placeholder, required = false }) => {
  return (
    <div className="mb-4">
      {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1 sm:text-sm"
      />
    </div>
  );
};

export default Input;
