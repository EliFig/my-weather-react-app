import React, {useState} from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity)
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            date: new Date(response.data.dt*1000),
 degrees:response.data.main.temp,
 wind:response.data.wind.speed,
 city:response.data.name,
 humidity: response.data.main.humidity,
        });
    
    }
    function Search(){
        const apiKey = "e0ba7ecac5a4ca8a73006071d6ba34be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event){
event.preventDefault();
Search();

    }

    function handleCityChange(event){
setCity(event.target.value);

    }

if(weatherData.ready){
return (
        <div className="weather">
        <div className="container">
      <form onSubmit={handleSubmit}>
           <div className="row">
                <div className="col-9">
            <input type="search" 
            placeholder="Enter a city"
            onChange={handleCityChange}
            className="form-control"/>
            </div>
            <div className="col-3">
            <button type="button" className="btn btn-primary">Seach</button>
            </div>
            </div>
            </form>
             <WeatherInfo data={weatherData}/>
    </div>
    </div>
    );

}else{
    Search()
    return "Loading...";
}   
}