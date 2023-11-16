import React from 'react';

const Button = ({ style, type, onClick, children, disabled = true, text }) => {
  return (
    <button style={style} type={type} onClick={onClick} disabled={disabled}>
      {children} {text}
    </button>
  );
};

export default Button;
