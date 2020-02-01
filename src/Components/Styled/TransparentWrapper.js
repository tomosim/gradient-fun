import styled from "styled-components";

const TransparentWrapper = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => (props.nightMode ? "black" : "white")};
  color: ${props => (props.nightMode ? "white" : "black")};
  height: calc(100vh - 60px);
  width: calc(100vw - 60px);
  padding: 15px;
  margin: 0;
  mix-blend-mode: ${props => (props.nightMode ? "multiply" : "screen")};

  h1 {
    font-size: 68pt;
  }
  display: flex;
  flex-direction: column;
`;

export default TransparentWrapper;
