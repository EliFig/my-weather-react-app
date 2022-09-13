import React, {useState} from "react";
import FormatteDate from "./FormatteDate"
import axios from "axios";
import "./weather.css";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            description:response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            date: new Date(response.data.dt*1000),
 degrees:response.data.main.temp,
 wind:response.data.wind.speed,
 city:response.data.name,
 humidity: response.data.main.humidity,
        });
    
    }

if(weatherData.ready){
return (
        <div className="weather">
        <div className="container">
      <form>
           <div className="row">
                <div className="col-9">
            <input type="search" 
            placeholder="Enter a city"
            className="form-control"/>
            </div>
            <div className="col-3">
            <button type="button" className="btn btn-primary">Seach</button>
            </div>
            </div>
            </form>
            <div className="row">
                <div className="col-6">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
             <span className="degrees" >
                {Math.round(weatherData.degrees)}
                </span> 
             <span className="unit" >°C</span>
             <span className="secondary">
                <ul className="list">
                    <li>
                        Humidity: {weatherData.humidity}% 
                    </li>
                    <li>
                        Wind:{weatherData.wind}Km/h
                    </li>
                </ul>
    
    </span>
    </div>
    <div className="col-6" id="city">
        <h1>{weatherData.city}</h1>
                <ul>
                    <li className="details">
                        <FormatteDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize details">
                        {weatherData.description}
                    </li>
                </ul>
            </div>
    </div>
    </div>
    </div>
    );

}else{
    const apiKey = "e0ba7ecac5a4ca8a73006071d6ba34be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
}   
}