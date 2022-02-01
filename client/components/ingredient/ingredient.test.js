import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Ingredient from './ingredient';

describe('Ingredient', () => {
  beforeEach(() => {
    render(
      <Ingredient ingredient={'banana'} quantity={'2'} measurement={'pcs'} />
    );
  });

  it('should render ingredient name', () => {
    const name = screen.getByText('banana');
    expect(name).toBeInTheDocument();
    expect(name).toHaveClass('ingredient_name');
  });

  it('should render ingredient quantity', () => {
    const quantity = screen.getByText(': 2 pcs');
    expect(quantity).toBeInTheDocument();
    expect(quantity).toHaveClass('ingredient_quantity');
  });
});
