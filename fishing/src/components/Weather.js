import React from "react";

const Weather = ({ weatherData }) => {
  let realTemp = 0;
  weatherData.name
    ? (realTemp = Math.floor(weatherData.main.temp - 273.15))
    : (realTemp = "取得中");
  return (
    <React.Fragment>
      <div style={style.weather}>
        <div style={style.weatherinfo}>
          <span>
            <p>温度</p>
            <p>湿度</p>
            <p>風速</p>
            <p>気圧</p>
          </span>
          <span>
            <p>{weatherData.name && realTemp}</p>
            <p>{weatherData.name && weatherData.main.humidity}</p>
            <p>{weatherData.name && weatherData.wind.speed}</p>
            <p>{weatherData.name && weatherData.main.pressure}</p>
          </span>
          <span>
            <p>℃</p>
            <p>%</p>
            <p>m/s</p>
            <p>hPa</p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

const style = {
  weatherinfo: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    fontSize: "2vh",
    textAlign: "center",
  },
};

export default Weather;
