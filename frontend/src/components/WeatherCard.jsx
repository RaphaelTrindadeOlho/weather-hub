export function WeatherCard({data}){
  if (!data) return null;

  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-primary/20 mt-8 animate-fade-in">
      <figure className="px-10 pt-10">
        <img src={data.iconUrl} alt="Weather Icon" className="rounded-xl w-24 h-24 bg-primary/10" />
      </figure>
      
      <div className="card-body items-center text-center">
        <h2 className="card-title text-5xl font-bold text-primary">
          {data.temperature}°C
        </h2>
        
        
        <div className="badge badge-secondary badge-outline capitalize mt-2">
          {data.description}
        </div>

        <div className="card-actions mt-4">
          <p className="text-sm opacity-50">Dados em tempo real via OpenWeather</p>
        </div>
      </div>
    </div>
  );
}