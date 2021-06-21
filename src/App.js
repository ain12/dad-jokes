//import React, { useState } from "react";
//import './components/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JokeApp from "./components/JokeApp";
import WelcomePage from "./Welcome"

function App() {
  //const [welcome, setWelcome] = useState(true);
  return (
    /* <React.Fragment>
       {welcome ? <WelcomePage content={welcome} onEnterClick={() => setWelcome(false)} /> : <JokeApp></JokeApp>}
     </React.Fragment> */
    <Router>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/JokeApp">
          <JokeApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
