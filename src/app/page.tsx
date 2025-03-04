"use client";
import { useState } from "react";

import { WeatherCard } from "./components/WeatherCard";
import { DetailCard } from "./components/DetailCard";
import { HilightCard } from "./components/HilightCard";

type Weather = {
  main: string;
  description: string;
  icon: string;
};

type WeatherData = {
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  name: string;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
};

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    try {
      console.log(`./api/weather?city=${city}`);

      const response = await fetch(`./api/weather?city=${city}`);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (city) fetchWeather();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className={weatherData === null ? "col-span-2" : ""}>
          <WeatherCard
            handleSubmit={handleSubmit}
            city={city}
            setCity={setCity}
            thereIsWeather={weatherData != null}
            name={weatherData?.name || ""}
            description={weatherData?.weather[0].description || ""}
            tempMax={weatherData?.main.temp_max || 0}
            tempMin={weatherData?.main.temp_min || 0}
            feelsLike={weatherData?.main.feels_like || 0}
            icon={weatherData?.weather[0].icon || ""}
            main={weatherData?.weather[0].main || ""}
          />
        </div>
        <div>
          {weatherData != null && (
            <HilightCard>
              <DetailCard
                title="Wind Status"
                amount={`${weatherData?.wind.speed} Km/h` || ""}
                description={`${weatherData?.wind.deg} °` || ""}
                icon="fas fa-wind"
              />
              <DetailCard
                title="Humidity"
                amount={`${weatherData?.main.humidity}%` || ""}
                description={`humidity is ${
                  weatherData?.main.humidity < 30
                    ? "Low"
                    : weatherData?.main.humidity > 60
                    ? "High"
                    : "Normal"
                }`}
                icon="fas fa-tint"
              />
            </HilightCard>
          )}
        </div>
        <div className="col-span-2 p-4">
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
