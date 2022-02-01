import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PopupTextInput from './popupTextInput';

describe('PopupTextInput', () => {
  let handleChange;
  beforeEach(() => {
    handleChange = jest.fn();
  });

  it('calls handleChange when input is typed', () => {
    render(
      <PopupTextInput
        value={''}
        name={'ingredient'}
        placeholder={'ingredient'}
        handleChange={handleChange}
      />
    );
    const input = screen.getByPlaceholderText('ingredient');
    userEvent.type(input, 'banana');
    expect(handleChange).toHaveBeenCalledTimes(6);
  });

  it('has class popupTextInput--right when inputposition is right', () => {
    render(
      <PopupTextInput
        value={3}
        name={'quantity'}
        placeholder={'quantity'}
        inputPosition='right'
        handleChange={handleChange}
      />
    );
    const input = screen.getByPlaceholderText('quantity');
    expect(input).toHaveClass('popupTextInput--right');
  });
});
