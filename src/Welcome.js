import React from "react";
import "./WelcomeStyle.css";
import pic from "./assets/laugh.svg"

const WelcomePage = (props) => {
    return (
        <div className="welcome">
            <img src={pic} className="logo" alt="laughing"></img>
            <button onClick={props.onEnterClick}>WELCOME</button>
            <div className="credits">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

export default WelcomePage;