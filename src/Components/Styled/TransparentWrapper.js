import styled from "styled-components";

const TransparentWrapper = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  height: calc(100vh - 80px);
  width: calc(100vw - 80px);
  padding: 15px;
  margin: 0;
  mix-blend-mode: multiply;
  h1 {
    font-size: 68pt;
  }
  display: flex;
  flex-direction: column;
`;

export default TransparentWrapper;
