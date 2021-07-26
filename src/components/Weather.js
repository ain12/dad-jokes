import React from 'react';

const weatherApp = (props) => {
    return (
        <React.Fragment>
            <h4>Weather</h4>
            <p>{props.weatherData.name}</p>
            <p>{props.weatherData.main.temp} &deg;C</p>
        </React.Fragment>
    )
}

export default weatherApp;