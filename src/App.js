
import React from "react";
import axios from "axios";
import './index.css';
import { useState } from "react";


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=57f626cce295022265bd6a4f10835075`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }
  return (

    <div className="app">
      <div className="search">
        <input value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="enter"
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main? <h1 className="temp">{Math.round(data.main.temp-273)}ºC</h1> : null}
            

          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{Math.round(data.main.feels_like-273)}ºC</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? <p className="bold">{data.wind.speed}MPH</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
        }



      </div>
    </div>

  );
}

export default App;
