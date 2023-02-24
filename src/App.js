import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import menu from './menu'
const api = {
  key:"d3ff56e0b2f995ab5183bcc318ccb77c",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
  const [query, setQuery]=useState('');
  const [weather, setWeather]=useState({});

  const search = evt =>{
    if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&AppID=${api.key}`)
        .then(res=>res.json())
        .then(result=>{

          setWeather(result);
          setQuery('');
          console.log(result);
          });

    }
  };


  const dateBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sat","Mon","Tus","Wed","Thr","Fri"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="App">

      <main>
        <div className="search-box">
          <input
            type = "text"
            className="search-bar"
            placeholder="Search..."
            onChange ={ e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}/>
        <div className="menu">
              <menu />
        </div>
        </div>
          {typeof (weather.main != "undefined") ? (
            <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">Today, {dateBuilder(new Date())}</div>

            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)} C°
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>) :('')}



      </main>
    </div>
  );
}

















export default App;
