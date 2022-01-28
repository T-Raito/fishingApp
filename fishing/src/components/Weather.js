import React from "react";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";

const Weather = ({ weatherData }) => {
  //   let realTemp = Math.floor(weatherData.main.temp - 273.15);
  return (
    <React.Fragment>
      <div style={style.weather}>
        <div>
          <p>画像</p>
          {/* <IconContext.Provider value={{ size: "10vw", color: "black" }}>
              {weatherData.weather[0].main === "Clear" ? (
                <WiDaySunny />
              ) : weatherData.weather[0].main === "Rain" ? (
                <WiHail />
              ) : weatherData.weather[0].main === "Clouds" ? (
                <WiCloudy />
              ) : (
                <p>{weatherData.weather[0].main}</p>
              )}
            </IconContext.Provider> */}
        </div>
        <div style={style.weatherinfo}>
          <span>
            <p>温度</p>
            <p>湿度</p>
            <p>風速</p>
          </span>
          <span>
            {/* <p>{realTemp}</p>
              <p>{weatherData.main.humidity}</p>
              <p>{weatherData.wind.speed}</p> */}
          </span>
          <span>
            <p>℃</p>
            <p>%</p>
            <p>m/s</p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

const style = {
  weather: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
  },
  weatherinfo: {
    display: "grid",
    gridTemplateColumns: "4fr 4fr 1fr",
    fontSize: "5px",
    textAlign: "center",
  },
};

export default Weather;
