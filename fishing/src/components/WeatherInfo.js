import React from "react";
import Weather from "../components/Weather";
import Wave from "../components/Wave";

const WeatherInfo = ({ weatherData, waveData }) => {
  return (
    <React.Fragment>
      <div style={style.weatherBack}>
        <p>天気</p>
        <Weather weatherData={weatherData} />
        <Wave waveData={waveData} />
      </div>
    </React.Fragment>
  );
};
const style = {
  weatherBack: {
    width: "90vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
  },
};
export default WeatherInfo;
