import React from 'react';

const Header = ({ onMenuToggle }) => {
  return (
    <header className='header'>
      <div id='logo'>
        <a href='#'>Cookie</a>
      </div>
      <div className='search'>
        <input type='text' id='header_search' placeholder='Search the Recipe' />
        <p id='mobile_logo'>Cookie</p>
      </div>
      <div id='icons'>
        <button className='header_btn memu_toggle' onClick={onMenuToggle}>
          menu
        </button>
        <button className='header_btn signout_btn'>Sign out</button>
      </div>
    </header>
  );
};

export default Header;
