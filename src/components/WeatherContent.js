import React, { useState, useEffect } from "react";
import './App.css';
import Weather from "./Weather.js";

function GetWeather() {
    const [lat, setLatitude] = useState([]);
    const [lon, setLongitude] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&mode=json&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result =>
                    setData(result))
        }
        fetchData()
    }, [lat, lon]);

    return (
        <div className="weather">
            {(typeof data.main != 'undefined') ? (
                <Weather weatherData={data} />
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default GetWeather;