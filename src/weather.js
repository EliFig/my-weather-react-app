import React from "react";
import "./weather.css";


export default function Weather(){
    return <div className="weather">
        <div className="container">
            <div className="row">
                <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="mostly cloudy" />
               24
                <ul>
                    <li>
Precipitation: 87%
                    </li>
                    <li>
                        Humidity: 87% <button type="button" class="btn btn-primary">Primary</button>
                    </li>
                    <li>
                        Wind: 11 Km/h
                    </li>
                </ul>
    </div>
    <div className="col-6">
        <h1> New York</h1>
                <ul>
                    <li>
Martes, 04:00
                    </li>
                    <li>
                        Nublado
                    </li>
                </ul>
    </div>
            
    </div>
    </div>
    </div>;
}