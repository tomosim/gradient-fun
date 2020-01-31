import styled from "styled-components";
import { Link } from "@reach/router";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
