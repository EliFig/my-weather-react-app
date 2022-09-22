import React from "react";
import FormatteDate from "./FormatteDate"
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
   <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        <div>
                    <WeatherIcon code={props.data.icon} alt={props.data.description} size={52}/>
                    </div>
                    <div>
            <WeatherTemperature celsius={props.data.degrees} />
            </div>
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