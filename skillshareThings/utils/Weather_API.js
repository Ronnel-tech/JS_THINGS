"use strict";

export async function getWeather(
  weatherLocation,
  weatherTemperature,
  weatherCondition,
  weatherHumidity,
  weatherWind,
  weatherStatus,
  weatherData,
  weatherButton,
) {
  const accessKey = "14f6de02656ae29fa72a880e79f99e60";
  const url = new URL("https://api.weatherstack.com/current");

  url.searchParams.set("access_key", accessKey);
  url.searchParams.set("query", "Manila");
  url.searchParams.set("units", "m");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Status code: ${response.status}`);
    } else {
      const data = await response.json();

      weatherLocation.textContent = `${data.location.name}`;
      weatherTemperature.textContent = `${data.current.temperature}`;
      weatherCondition.textContent = `${data.current.weather_descriptions[0]}`;
      weatherHumidity.textContent = `${data.current.humidity}`;
      weatherWind.textContent = `${data.current.wind_speed}`;

      weatherStatus.hidden = true;
      weatherData.hidden = false;
      weatherButton.hidden = true;
    }
  } catch (error) {
    console.error(error.message);
  }
}
