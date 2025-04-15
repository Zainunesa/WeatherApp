// Function to fetch weather data
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = ""; //Enter your API Key here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    // Display weather information
    document.getElementById("data").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p>${error.message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  bird.style.animationPlayState = "running";
});
