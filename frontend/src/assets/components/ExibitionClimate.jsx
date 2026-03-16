const ExibitionClimate = () => {
  return (
    <div>
      <h1>Weather Informations</h1>
      <img src={iconUrl} alt="Weather Icon" />
      <p>Temperature: {temperature}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default ExibitionClimate