import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Steps from './steps';

describe('Steps', () => {
  it('should render the prop data index', () => {
    render(<Steps index={'1'} step={'boiling water'} />);
    const label = screen.getByText('1');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('recipe_process');
  });

  it('should render the prop data step', () => {
    render(<Steps index={'1'} step={'boiling water'} />);
    const content = screen.getByText('boiling water');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('recipe_content');
  });
});
