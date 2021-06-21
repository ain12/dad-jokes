import React, { useState } from "react";
//import './components/App.css';
import JokeApp from "./components/JokeApp";
import WelcomePage from "./Welcome"

function App() {
  const [welcome, setWelcome] = useState(true);
  return (
    <React.Fragment>
      {welcome ? <WelcomePage content={welcome} onEnterClick={() => setWelcome(false)} /> : <JokeApp></JokeApp>}
    </React.Fragment>
  )
}

export default App;
