"use client";

import { useState } from "react";
import Header from "../header";
import Footer from "../footer";

export default function Weather() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=ad51ee717a84e8cbdee5e85c067748ee`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    console.log(
      "this is the lat and long: " + location.lat + ", " + location.long
    );
  };

  const handleChangeLat = (e) => {
    setLat(e.target.value);
  };

  const handleChangeLong = (e) => {
    setLong(e.target.value);
  };

  return (
    <main>
      <Header />
      <section className="py-16 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
              Check Weather Conditions
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <input
                  type="text"
                  value={lat}
                  onChange={handleChangeLat}
                  placeholder="Enter location lat"
                  className="border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 text-black"
                />
                <input
                  type="text"
                  value={long}
                  onChange={handleChangeLong}
                  placeholder="Enter location long"
                  className="border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 text-black"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  {loading ? "Loading..." : "Get Weather"}
                </button>
              </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {weatherData && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Weather in {lat} , {long}
                </h2>
                <p className="text-lg">
                  Temperature: {weatherData.current.temp}°C
                </p>
                <p className="text-lg">
                  Feels like: {weatherData.current.feels_like}°C
                </p>
                <p className="text-lg">
                  Humidity: {weatherData.current.humidity}%
                </p>
                <p className="text-lg">
                  Description: {weatherData.current.weather[0].description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
