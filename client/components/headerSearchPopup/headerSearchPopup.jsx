import React from 'react';

const HeaderSearchPopup = ({ searchDropdown, onSelectRecipe, dropdownRef }) => {
  const list = searchDropdown.map((item) => {
    return (
      <li
        key={item._id}
        className='HeaderSearchPopup__li'
        onClick={() => onSelectRecipe(item._id)}
      >
        {item.title}
      </li>
    );
  });

  return (
    <ul className='headerSearchPopup' ref={dropdownRef}>
      {list}
    </ul>
  );
};

export default HeaderSearchPopup;
