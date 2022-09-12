import React from "react";
import "./App.css";
import Weather from "./weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather/>
      <footer> This proyect was coded by Eliana Figueroa, and is {" "}
      <a className="GitHub"href="https://github.com/EliFig/my-weather-react-app" target="_blank" rel="noopener noreferrer">open-sourced in GitHub</a></footer>
    </div>
    </div>
  );
}

