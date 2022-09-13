import React from "react";
import FormatteDate from "./FormatteDate"
import WeatherIcon from "./WeatherIcon";

export default function(props){
    return(
        <div className="Weather">
   <div className="row">
                <div className="col-6">
                    <span className="flot-left">
                    <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                    </span>
             <span className="degrees" >
                {Math.round(props.data.degrees)}
                </span> 
             <span className="unit" >°C</span>
             <span className="secondary">
                <ul className="list">
                    <li>
                        Humidity: {props.data.humidity}% 
                    </li>
                    <li>
                        Wind:{props.data.wind}Km/h
                    </li>
                </ul>
    
    </span>
    </div>
    <div className="col-6" id="city">
        <h1>{props.data.city}</h1>
                <ul>
                    <li className="details">
                        <FormatteDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize details">
                        {props.data.description}
                    </li>
                </ul>
            </div>
    </div>
    </div>
    );
}