import React from "react";
import StyledLink from "./Styled/StyledLink";

const Nav = () => {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink> |{" "}
      <StyledLink to="/settings">Settings</StyledLink>
    </nav>
  );
};

export default Nav;
