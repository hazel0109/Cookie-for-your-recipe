import React from 'react';

const PopupButton = ({
  label,
  className = '',
  type,
  handleClick = () => {},
  ...props
}) => {
  return (
    <button
      className={`popupButton ${`popupButton--${type}`}${className}`}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default PopupButton;
