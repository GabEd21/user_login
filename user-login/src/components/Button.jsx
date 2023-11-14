import React from 'react';

const Button = ({ style, type, onClick, children, disabled = true }) => {
  return (
    <button style={style} type={type} onClick={onClick} disabled = {disabled}>
      {children}
    </button>
  );
};

export default Button;
