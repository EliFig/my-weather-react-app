import React from "react";
import "./weather.css";


export default function Weather(){
    return <div className="weather">
        <div className="container">
      <form>
           <div className="row">
                <div className="col-9">
            <input type="search" 
            placeholder="Enter a city"
            className="form-control"/>
            </div>
            <div className="col-3">
            <button type="button" class="btn btn-primary">Seach</button>
            </div>
            </div>
            </form>
            <div className="row">
                <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="mostly cloudy" />
             <span className="degrees" >24</span> 
             <span className="unit" >°C</span>
             <span className="secondary">
                <ul className="list">
                    <li>
Precipitation: 87%
                    </li>
                    <li>
                        Humidity: 87% 
                    </li>
                    <li>
                        Wind: 11 Km/h
                    </li>
                </ul>
    
    </span>
    </div>
    <div className="col-6" id="city">
        <h1> New York, EE. UU.</h1>
                <ul>
                    <li className="details">
                        Friday, 03:00
                    </li>
                    <li className="details">
                        Cloudy
                    </li>
                </ul>
            </div>
    </div>
    </div>
    </div>;
}