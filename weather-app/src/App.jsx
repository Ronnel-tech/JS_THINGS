import { useState } from 'react'
import Weather from './Weather'
import './App.css'

function App() {
  const cities = ['Manila', 'Cebu', 'Davao']
  const [selectedCity, setSelectedCity] = useState('Manila')

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="controls">
        <label htmlFor="city-select">Select a city:</label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <Weather city={selectedCity} />
    </div>
  )
}

export default App
