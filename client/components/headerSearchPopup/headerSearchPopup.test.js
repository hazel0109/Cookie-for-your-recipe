import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import HeaderSearchPopup from './headerSearchPopup';

describe('HeaderSearchPopup', () => {
  let onSelectRecipe;
  let searchDropdown;
  beforeEach(() => {
    onSelectRecipe = jest.fn();
    searchDropdown = [
      { _id: '10001', title: 'Banana Cake' },
      { _id: '10002', title: 'Banana pudding' },
      { _id: '10003', title: 'Banana bread' },
    ];
    render(
      <HeaderSearchPopup
        searchDropdown={searchDropdown}
        onSelectRecipe={onSelectRecipe}
      />
    );
  });

  it('should render the result', () => {
    const list = screen.getByText('Banana Cake');
    expect(list).toBeInTheDocument();
  });

  it('should send its id when it is clicked', () => {
    const list = screen.getByText('Banana pudding');
    userEvent.click(list);
    expect(onSelectRecipe).toBeCalledWith('10002');
  });
});
