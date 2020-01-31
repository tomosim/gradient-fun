import React, { useState, useEffect } from "react";
import Slider from "./Styled/Slider";

const SliderWrapper = ({ text, setColour, colour }) => {
  const [redValue, setRedValue] = useState(colour[0]);
  const [greenValue, setGreenValue] = useState(colour[1]);
  const [blueValue, setBlueValue] = useState(colour[2]);

  useEffect(() => {
    setColour([redValue, greenValue, blueValue]);
  }, [redValue, greenValue, blueValue, setColour]);

  return (
    <div className="sliderWrapper">
      <h2>{text}</h2>
      <div className="sliders">
        <Slider
          colour={`rgb(${redValue}, ${(100 / 255) * redValue}, ${(100 / 255) *
            redValue})`}
          borderColour="rgb(255, 100, 100)"
          type="range"
          min="1"
          max="255"
          id="red"
          value={redValue}
          onChange={e => {
            setRedValue(e.target.value);
          }}
        />
        <Slider
          colour={`rgb( ${(100 / 255) * greenValue}, ${greenValue}, ${(100 /
            255) *
            greenValue})`}
          borderColour="rgb(100, 255, 100)"
          type="range"
          min="1"
          max="255"
          id="green"
          value={greenValue}
          onChange={e => {
            setGreenValue(e.target.value);
          }}
        />
        <Slider
          colour={`rgb( ${(100 / 255) * blueValue}, ${(100 / 255) *
            blueValue}, ${blueValue})`}
          borderColour="rgb(100, 100, 255)"
          type="range"
          min="1"
          max="255"
          id="blue"
          value={blueValue}
          onChange={e => {
            setBlueValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SliderWrapper;
