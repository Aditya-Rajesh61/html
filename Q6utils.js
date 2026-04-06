const API_KEY = "945b9f34636ee5917f829cdbe81bdd90"; // Replace with your OpenWeatherMap API key

export async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
}