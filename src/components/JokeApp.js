import React from "react";
import './App.css';
//import Weather from "./Weather.js";
import GetWeather from "./WeatherContent"
import GetJoke from "./JokeContent"

function JokeApp() {

    return (
        <div className="App">
            <GetJoke></GetJoke>
            <GetWeather></GetWeather>
        </div>
    )
}

export default JokeApp;