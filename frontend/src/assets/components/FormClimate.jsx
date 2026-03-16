const FormClimate = () => {
  return (
    <div>
      <h1>Form Climate</h1>
      <form>
        <input type="text" name="city" placeholder="Enter city name" required />
        <button type="submit" >Get Weather</button>
      </form>
    </div>
  )
}

export default FormClimate