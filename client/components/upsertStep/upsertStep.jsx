import React, { memo } from 'react';
import ContentEditable from 'react-contenteditable';

const UpsertStep = memo(({ id, stepValue, setInstruction }) => {
  const pasteAsPlainText = (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  };

  return (
    <li className='add_recipe'>
      <ContentEditable
        className='input_recipe'
        onChange={(e) => {
          setInstruction(e.target.value, id);
        }}
        onPaste={pasteAsPlainText}
        html={stepValue}
      />
    </li>
  );
});

export default UpsertStep;
