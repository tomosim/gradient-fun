import styled from "styled-components";

const Background = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.nightMode ? "black" : "white")};
  background-image: linear-gradient(
    ${props =>
      `rgb(${props.colourOne[0]},${props.colourOne[1]},${props.colourOne[2]})`},
    ${props =>
      `rgb(${props.colourTwo[0]},${props.colourTwo[1]},${props.colourTwo[2]})`}
  );
  background-position: 10px 10px, 100% 0;
  background-repeat: no-repeat;
  -webkit-background-size: calc(100vw - 20px) calc(100vh - 20px);
  -moz-background-size: calc(100vw - 20px) calc(100vh - 20px);
  background-size: calc(100vw - 20px) calc(100vh - 20px);
`;

export default Background;
