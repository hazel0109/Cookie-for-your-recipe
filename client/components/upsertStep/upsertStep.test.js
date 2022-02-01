import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UpsertStep from './upsertStep';

describe('UpsertStep', () => {
  let setInstruction;
  beforeEach(() => {
    setInstruction = jest.fn();
    render(
      <UpsertStep
        id={'10001'}
        stepValue={'boiling'}
        setInstruction={setInstruction}
      />
    );
  });

  it('should render the text area with step value', () => {
    const textarea = screen.getByText('boiling');
    expect(textarea).toBeInTheDocument();
  });

  it('calls setInstruction when the textarea is typed', () => {
    const textarea = screen.getByText('boiling');
    userEvent.type(textarea, ' water');
    expect(setInstruction).toHaveBeenLastCalledWith('boiling water', '10001');
  });

  it('should be able to edit the given value in the textarea', () => {
    const textarea = screen.getByText('boiling');
    userEvent.type(textarea, '{backspace}{backspace}{backspace}ed');
    expect(setInstruction).toHaveBeenLastCalledWith('boiled', '10001');
  });
});
