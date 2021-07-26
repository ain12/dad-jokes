import React, { useState } from "react";
import './App.css';

function GetJoke() {
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
        <React.Fragment>
            <h2>Dad jokes generator</h2>
            <p>{joke}</p>
            <button onClick={getJoke}>Next Joke</button>
        </React.Fragment>
    )
}

export default GetJoke;