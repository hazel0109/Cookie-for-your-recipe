// import React from 'react';
// import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
// import AddIngredientLists from './addIngredientList';

// describe('AddIngredientLists', () => {
//   let dispatch;
//   beforeEach(() => {
//     dispatch = jest.fn();
//     render(<AddIngredientLists />);
//   });

//   it('should initialized with nine inputs', async () => {
//     const inputs = await screen.findAllByRole('input');
//     expect(inputs).toHaveLength(9);
//   });
// });

//   it('calls handleClick when button is clicked', () => {
//
//     const button = screen.getByText('Add');
//     userEvent.click(button);
//     expect(handleClick).toHaveBeenCalled();
//   });
// });

// let setInstruction;
// beforeEach(() => {
//   setInstruction = jest.fn();
//   render(
//     <UpsertStep
//       id={'10001'}
//       stepValue={'boiling'}
//       setInstruction={setInstruction}
//     />
//   );
// });

// it('should render the text area with step value', () => {
//   const textarea = screen.getByText('boiling');
//   expect(textarea).toBeInTheDocument();
// });

// it('calls setInstruction when the textarea is typed', () => {
//   const textarea = screen.getByText('boiling');
//   userEvent.type(textarea, ' water');
//   expect(setInstruction).toHaveBeenLastCalledWith('boiling water', '10001');
// });

// it('should be able to edit the given value in the textarea', () => {
//   const textarea = screen.getByText('boiling');
//   userEvent.type(textarea, '{backspace}{backspace}{backspace}ed');
//   expect(setInstruction).toHaveBeenLastCalledWith('boiled', '10001');
// })
