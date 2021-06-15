import React, { useState } from "react";
import './App.css';

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setJoke(data.joke))
  }

  return (
    <div className="App">
      <h2>Dad jokes generator</h2>
      <p>{joke}</p>
      <button onClick={getJoke}>Next Joke</button>
    </div>
  )
}

export default App;
