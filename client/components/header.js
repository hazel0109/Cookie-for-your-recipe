import React, { Component } from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div id='logo'>
        <a href='#'>Cookie</a>
      </div>
      <input
        type='text'
        id='header_search'
        placeholder='Search the Recipe'
      ></input>
      <div id='login'>
        <a href='#'>Login</a>
      </div>
    </header>
  );
};

export default Header;
