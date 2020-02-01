import styled from "styled-components";

const SettingsWrapper = styled.div`
  border-bottom: 2px ${props => (props.nightMode ? "white" : "black")} solid;
  border-top: 2px ${props => (props.nightMode ? "white" : "black")} solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding-top: 10px;
  h2 {
    font-size: 16pt;
    text-align: end;
  }
  p {
    font-size: 12pt;
    font-weight: lighter;
  }
`;

export default SettingsWrapper;
