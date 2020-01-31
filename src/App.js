import React, { useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Background from "./Components/Styled/Background";
import TransparentWrapper from "./Components/Styled/TransparentWrapper";
import SettingsPage from "./Pages/SettingsPage";
import Nav from "./Components/Nav";

function App() {
  const [colourOne, setColourOne] = useState([255, 130, 180]);
  const [colourTwo, setColourTwo] = useState([0, 210, 255]);
  return (
    <Background colourOne={colourOne} colourTwo={colourTwo}>
      <TransparentWrapper>
        <h1>Tom Simmons.</h1>
        <Nav />
        <Router>
          <SettingsPage
            colourOne={colourOne}
            colourTwo={colourTwo}
            setColourOne={setColourOne}
            setColourTwo={setColourTwo}
            path="/settings"
          />
        </Router>
      </TransparentWrapper>
    </Background>
  );
}

export default App;
