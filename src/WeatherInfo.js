import React from "react";
import FormatteDate from "./FormatteDate"
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function(props){
    return(
        <div className="Weather">
   <div className="row">
                <div className="col-6">
                    <span className="d-flex">
                    <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                    </span>
                    <span>
            <WeatherTemperature celsius={props.data.degrees} />
            </span>
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