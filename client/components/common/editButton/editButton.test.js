import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import EditButton from './editButton';

describe('EditButton', () => {
  let handleClick;
  beforeEach(() => {
    handleClick = jest.fn();
  });

  it('calls handleClick when button is clicked', () => {
    render(<EditButton label={'Edit'} handleClick={handleClick} />);
    const button = screen.getByText('Edit');
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
