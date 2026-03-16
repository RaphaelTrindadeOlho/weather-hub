import './App.css'
import FormClimate from './assets/components/FormClimate'
import ExibitionClimate from './assets/components/ExibitionClimate'
import { useState } from 'react'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  return (
    <div className="App">
      <FormClimate onWeatherDataChange={setWeatherData}/>
      {weatherData && <ExibitionClimate weatherData=  {weatherData}/>}
    </div>
  )
}

export default App
