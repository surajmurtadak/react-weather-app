const Card =({weatherData})=>{
  let imgURI =`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  return(
    <>
      <img src={imgURI} alt="icon" />
      <h1>{weatherData.main.temp} &deg;C</h1>
      <h3>{weatherData.name}</h3>
      <h2> {weatherData.weather[0].main}</h2>
      <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
      
    </>
  );
}

export default Card;