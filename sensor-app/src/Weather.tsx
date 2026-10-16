import { useEffect, useState } from "react";   

const WEATHER_URL =                                           // 2. constants outside the component
  "https://api.open-meteo.com/v1/forecast?latitude=59.89&longitude=10.52&current=temperature_2m,wind_speed_10m&wind_speed_unit=ms";

type Weather = {                                              // 3. types outside the component
  current: { temperature_2m: number; wind_speed_10m: number };
};

export default function Weather() {                         // 4. the component wraps everything below
  const [weather, setWeather] = useState<Weather | null>(null);   //    state first

  useEffect(() => {
    async function load() {
      const response = await fetch(WEATHER_URL);
      const data: Weather = await response.json();
      setWeather(data);
    }
    load();          // an effect itself can't be async, so define the function and call it
  }, []);

  return weather === null ? (                                 //    then return the JSX (your code)
    <p>Loading…</p>
  ) : (
    <>
      <p>Temperature: {weather.current.temperature_2m} °C</p>
      <p>Wind: {weather.current.wind_speed_10m} m/s</p>
    </>
  );
}