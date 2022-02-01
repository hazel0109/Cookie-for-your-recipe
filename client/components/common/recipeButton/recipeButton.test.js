import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RecupeButton from './recipeButton';

describe('RecupeButton', () => {
  let handleClick;
  beforeEach(() => {
    handleClick = jest.fn();
  });

  it('calls handleClick when button is clicked', () => {
    render(<RecupeButton label={'Ice cream'} handleClick={handleClick} />);
    const button = screen.getByText('Ice cream');
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('is an active button', () => {
    render(
      <RecupeButton
        label={'Ice cream'}
        id={10001}
        activeId={10001}
        handleClick={handleClick}
      />
    );
    const button = screen.getByText('Ice cream');
    expect(button).toHaveClass('active_recipe');
  });

  it('is is not an active button', () => {
    render(
      <RecupeButton
        label={'Ice cream'}
        id={10001}
        activeId={10003}
        handleClick={handleClick}
      />
    );
    const button = screen.getByText('Ice cream');
    expect(button).not.toHaveClass('active_recipe');
  });
});
