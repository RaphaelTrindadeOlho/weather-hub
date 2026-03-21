import { useState } from 'react';
import { SearchInput } from './components/SearchInput';
import { WeatherCard } from './components/WeatherCard';
import './index.css'

function App() {
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);     

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null); 

    try {
      const response = await fetch('http://localhost:3000/weather', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }), 
      });

      const data = await response.json();

  
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao buscar o clima');
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center p-10 transition-all duration-500">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-primary mb-2">Weather Dashboard</h1>
        <p className="text-base-content/60">Consulte o clima de qualquer cidade do mundo</p>
      </header>


      <SearchInput onSearch={handleSearch} />

      {loading && (
        <span className="loading loading-dots loading-lg text-primary mt-10"></span>
      )}

      {error && (
        <div className="alert alert-error shadow-lg max-w-md mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{error}</span>
        </div>
      )}

      
      <WeatherCard data={weather} />

      <footer className="mt-auto pt-10 text-sm opacity-30">
        Desenvolvido com React, Node.js e Docker
      </footer>
    </div>
  );
}

export default App;