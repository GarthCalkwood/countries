import React from 'react'

const WeatherInfo = ({ weather }) => {
  const tempCelsius = (weather.main.temp - 273.15).toFixed(0)
  const tempFahrenheit = (tempCelsius * 9/5 + 32).toFixed(0)
  const mainWeather = weather.weather[0].main
  const humidity = weather.main.humidity

  return (
    <div>
      Weather: {mainWeather} <br/>
      Temp: {tempCelsius} Celsius, {tempFahrenheit} Fahrenheit <br/>
      Humidity: {humidity}% 
    </div>
  )
}

export default WeatherInfo