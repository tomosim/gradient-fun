import React from "react";
import SliderWrapper from "../Components/SliderWrapper";

const SettingsPage = ({ setColourOne, setColourTwo, colourOne, colourTwo }) => {
  return (
    <div className="settingsWrapper">
      <SliderWrapper
        text="Top Colour"
        setColour={setColourOne}
        colour={colourOne}
      />
      <SliderWrapper
        text="Bottom Colour"
        setColour={setColourTwo}
        colour={colourTwo}
      />
      <p>
        <i>Psst! I wouldn't recommend zeroing out...</i>
      </p>
    </div>
  );
};

export default SettingsPage;
