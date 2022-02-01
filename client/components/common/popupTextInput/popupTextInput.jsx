import React from 'react';

const PopupTextInput = ({
  value,
  name,
  placeholder,
  className = '',
  inputPosition = 'left',
  handleChange = () => {},
  ...props
}) => {
  return (
    <input
      type='text'
      className={`popupTextInput ${`popupTextInput--${inputPosition} ${className}`}`}
      value={value}
      role='input'
      name={name ?? placeholder}
      placeholder={placeholder}
      onChange={handleChange}
      {...props}
    />
  );
};

export default PopupTextInput;
