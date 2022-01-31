import React from 'react';

const EditButton = ({
  label,
  className = '',
  type,
  handleClick = () => {},
  ...props
}) => {
  return (
    <button
      className={`editButton ${`editButton--${type}`}${className}`}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};
export default EditButton;
