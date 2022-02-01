import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PopupButton from './popupButton';

describe('PopupButton', () => {
  let handleClick;
  beforeEach(() => {
    handleClick = jest.fn();
  });

  it('calls handleClick when button is clicked', () => {
    render(<PopupButton label={'Add'} handleClick={handleClick} />);
    const button = screen.getByText('Add');
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
