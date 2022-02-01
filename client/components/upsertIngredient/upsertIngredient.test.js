import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UpsertIngredient from './upsertIngredient';

describe('UpsertIngredient', () => {
  let setIngredient;
  beforeEach(() => {
    setIngredient = jest.fn();
    render(<UpsertIngredient id={'10001'} setIngredient={setIngredient} />);
  });

  it('should have three inputs', async () => {
    const inputs = await screen.findAllByRole('input');
    expect(inputs).toHaveLength(3);
  });

  it('calls setIngredient with target name, target value, and id when input is typed', () => {
    const input = screen.getByPlaceholderText('ingredient');
    userEvent.type(input, 'banana');
    expect(setIngredient).toHaveBeenLastCalledWith(
      'ingredient',
      'banana',
      '10001'
    );
  });
});
