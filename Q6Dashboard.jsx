function Dashboard({ weather }) {
  if (!weather) return <p style={{ textAlign: "center" }}>Enter a city to see weather.</p>;

  if (weather.cod !== 200) {
    return <p style={{ textAlign: "center" }}>City not found. Please try again.</p>;
  }

  return (
    <div className="card" style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
      <h2>{weather.name}</h2>
      <p>🌡️ Temperature: {weather.main.temp} °C</p>
      <p>🌤️ Description: {weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default Dashboard;