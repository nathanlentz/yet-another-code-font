import React, { useState } from "react";
import styled from 'styled-components';

import { EditorWrapper, EditorTextArea } from './styles';

/**
 * react-simple-code-editor
 * prism-react-renderer
 * https://codesandbox.io/s/prism-react-renderer-example-u6vhk?file=/package.json
 */

const defaultText = `
  console.log('hello world!');
`;

function Editor() {
  const [text, setText] = useState(defaultText);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <EditorWrapper>
        <EditorTextArea onChange={handleTextChange} defaultValue={defaultText}></EditorTextArea>
      </EditorWrapper>
    </div>
  )
}

export default Editor;
