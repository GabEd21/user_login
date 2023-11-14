// TextBoxInput.jsx
import React from 'react';

const TextBoxInput = ({ label, type, name, value, onChange, required }) => {
  const darkTheme = {
    backgroundColor: '#333',
    color: '#fff',
  };

  const inputStyle = {
    ...darkTheme,
    marginBottom: '10px',
    width: '200px',
    padding: '5px',
    color: '#000', // Change the color to black
  };

  return (
    <div style={inputStyle}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextBoxInput;
