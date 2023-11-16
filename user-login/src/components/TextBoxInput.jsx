import React from 'react';

const TextBoxInput = ({ label, type, name, value, onChange, required, placeholder }) => {
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
        data-testid='textbox'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextBoxInput;
