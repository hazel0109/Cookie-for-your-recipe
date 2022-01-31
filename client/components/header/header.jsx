import React, { useState, useEffect, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { headerSelector } from './header.selector';
import HeaderSearchPopup from '../headerSearchPopup/headerSearchPopup';
import { updateActiveId } from '../../redux/action/recipesActions';

const Header = memo(({ onMenuToggle }) => {
  const dropdownRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [popupOn, setPopupOn] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [searchDropdown, setSearchDropdown] = useState([]);
  const { recipes } = useSelector(headerSelector);

  useEffect(() => {
    const result = recipes.filter(
      (item) =>
        searchVal &&
        item.title.toLowerCase().startsWith(searchVal.toLowerCase())
    );
    setSearchDropdown(result);
  }, [searchVal]);

  useEffect(() => {
    const clickEvent = (e) => {
      if (e.target !== dropdownRef.current && e.target !== inputRef.current)
        setPopupOn(false);
    };
    document.addEventListener('click', clickEvent);
    return () => document.removeEventListener('click', clickEvent);
  }, [popupOn]);

  const onSelectRecipe = (id) => {
    dispatch(updateActiveId(id));
    setPopupOn(false);
    setSearchVal('');
  };

  return (
    <header className='header'>
      <div id='logo'>
        <a href='#'>Cookie</a>
      </div>
      <div className='search'>
        <input
          type='search'
          id='header_search'
          value={searchVal}
          ref={inputRef}
          placeholder='Search the Recipe'
          aria-label='Search through recipes'
          onFocus={() => setPopupOn(true)}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <p id='mobile_logo'>Cookie</p>
        {popupOn && (
          <HeaderSearchPopup
            searchDropdown={searchDropdown}
            onSelectRecipe={onSelectRecipe}
            dropdownRef={dropdownRef}
          />
        )}
      </div>
      <div id='icons'>
        <button className='header_btn memu_toggle' onClick={onMenuToggle}>
          menu
        </button>
        <button className='header_btn signout_btn'>Sign out</button>
      </div>
    </header>
  );
});

export default Header;
