import { useState, useEffect } from 'react'

function Weather({ city }) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    
    // Simulate fetching weather data using setTimeout
    const timer = setTimeout(() => {
      // Simulated weather data for different cities
      const weatherData = {
        'Manila': { temperature: 32, condition: 'Sunny', humidity: 75 },
        'Cebu': { temperature: 30, condition: 'Partly Cloudy', humidity: 80 },
        'Davao': { temperature: 28, condition: 'Rainy', humidity: 85 }
      }
      
      setWeather(weatherData[city] || { temperature: 25, condition: 'Unknown', humidity: 70 })
      setLoading(false)
    }, 1000) // 1 second delay to simulate API call

    return () => clearTimeout(timer)
  }, [city])

  if (loading) {
    return <div className="weather loading">Loading weather data...</div>
  }

  return (
    <div className="weather">
      <h2>Weather in {city}</h2>
      <div className="weather-info">
        <p><strong>Temperature:</strong> {weather.temperature}°C</p>
        <p><strong>Condition:</strong> {weather.condition}</p>
        <p><strong>Humidity:</strong> {weather.humidity}%</p>
      </div>
    </div>
  )
}

export default Weather
