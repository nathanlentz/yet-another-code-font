import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Card = styled.div`
    position: relative;
    width: 230px;
    min-height: 254px;
    background: #F5F5F7;
    border-radius: 14px;
    padding: 25px;
    margin: 0 15px 30px 15px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 672px) {
        width: 100%;
    }
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

export const EditorWrapper = styled.div`
  min-height: 200px;
  position: relative;
  box-sizing: border-box;
  min-width: 0px;
  display: flex;
  flex: 1 1 0;
`;

export const EditorTextArea = styled.textarea`
  // position: absolute;
  // top: 0px;
  // left: 0px;
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;
  padding: 0px 0px 0px 3rem;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  background: none;
  -webkit-font-smoothing: antialiased;
  resize: none;
  flex: 1 1 0;
`;