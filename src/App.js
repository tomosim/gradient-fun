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
  const [nightMode, setNightMode] = useState(true);
  return (
    <Background
      colourOne={colourOne}
      colourTwo={colourTwo}
      nightMode={nightMode}
    >
      <TransparentWrapper nightMode={nightMode}>
        <h1>Tom Simmons.</h1>
        <Nav nightMode={nightMode} />
        <Router>
          <SettingsPage
            colourOne={colourOne}
            colourTwo={colourTwo}
            setColourOne={setColourOne}
            setColourTwo={setColourTwo}
            path="/settings"
            nightMode={nightMode}
            setNightMode={setNightMode}
          />
        </Router>
      </TransparentWrapper>
    </Background>
  );
}

export default App;
