import React from "react";
import StyledLink from "./Styled/StyledLink";

const Nav = ({ nightMode }) => {
  return (
    <nav>
      <StyledLink nightMode={nightMode} to="/">
        Home
      </StyledLink>{" "}
      |{" "}
      <StyledLink nightMode={nightMode} to="/projects">
        Projects
      </StyledLink>{" "}
      |{" "}
      <StyledLink nightMode={nightMode} to="/settings">
        Settings
      </StyledLink>
    </nav>
  );
};

export default Nav;
