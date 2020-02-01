import React from "react";
import Paragraph from "../Components/Styled/Paragraph";
import PageWrapper from "../Components/Styled/PageWrapper";

const AboutPage = ({ nightMode }) => {
  return (
    <PageWrapper nightMode={nightMode}>
      <Paragraph>
        I'm Tom. I'm a tutor and lecturer at a coding bootcamp in Manchester,
        UK. This is my portfolio. Have a look around.
      </Paragraph>
    </PageWrapper>
  );
};

export default AboutPage;
