import React from "react";
import SliderWrapper from "../Components/SliderWrapper";
import PageWrapper from "../Components/Styled/PageWrapper";
import Toggle from "react-styled-toggle";
import Paragraph from "../Components/Styled/Paragraph";

const SettingsPage = ({
  nightMode,
  setColourOne,
  setColourTwo,
  colourOne,
  colourTwo,
  setNightMode
}) => {
  return (
    <PageWrapper nightMode={nightMode}>
      <Toggle
        checked={nightMode ? false : true}
        labelLeft="Night Mode"
        labelRight="Day Mode"
        height="28"
        width="50"
        sliderHeight="22"
        sliderWidth="22"
        translate="20"
        backgroundColorChecked="#303030"
        onChange={() => {
          setNightMode(!nightMode);
        }}
      />
      <SliderWrapper
        text="Top Colour"
        setColour={setColourOne}
        colour={colourOne}
        nightMode={nightMode}
      />
      <SliderWrapper
        text="Bottom Colour"
        setColour={setColourTwo}
        colour={colourTwo}
        nightMode={nightMode}
      />
      <Paragraph>
        <i>
          Psst! I wouldn't recommend {nightMode ? "zeroing" : "maxing"} out...
        </i>
      </Paragraph>
    </PageWrapper>
  );
};

export default SettingsPage;
