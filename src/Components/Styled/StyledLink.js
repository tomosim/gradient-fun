import styled from "styled-components";
import { Link } from "@reach/router";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.nightMode ? "white" : "black")};
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
