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
          <ul style={style.list}>
            <li style={style.item}>温度</li>
            <li style={style.item}>湿度</li>
            <li style={style.item}>風速</li>
            <li style={style.item}>気圧</li>
          </ul>
          <ul style={style.list}>
            <li style={style.item}>{weatherData.name && realTemp}</li>
            <li style={style.item}>
              {weatherData.name && weatherData.main.humidity}
            </li>
            <li style={style.item}>
              {weatherData.name && weatherData.wind.speed}
            </li>
            <li style={style.item}>
              {weatherData.name && weatherData.main.pressure}
            </li>
          </ul>
          <ul style={style.list}>
            <li style={style.item}>℃</li>
            <li style={style.item}>%</li>
            <li style={style.item}>m/s</li>
            <li style={style.item}>hPa</li>
          </ul>
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
  },
  list: {
    listStyle: "none",
    paddingLeft: "0px",
  },
  item: {
    marginBottom: "2vh",
    textAlign: "center",
  },
};

export default Weather;
