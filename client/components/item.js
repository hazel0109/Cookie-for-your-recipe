import React, { Component } from 'react';

const Item = ({ title, onClick, id }) => {
  return (
    <button onClick={() => onClick(id)} className='item'>
      {title}
    </button>
  );
};

export default Item;
