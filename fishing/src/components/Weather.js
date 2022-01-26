import React from "react";
// import { IconContext } from "react-icons";
// import { WiDaySunny } from "react-icons/wi";
// import { WiHail } from "react-icons/wi";
// import { WiCloudy } from "react-icons/wi";
const Weather = ({ weatherData }) => {
  //   let realTemp = Math.floor(weatherData.main.temp - 273.15);
  return (
    <React.Fragment>
      <p>天気</p>
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
      <div style={style.weather}>
        <span>
          <p>温度</p>
          <p>湿度</p>
          <p>風速</p>
          <p>波高</p>
          <p>満潮</p>
          <p>干潮</p>
          <p>日出</p>
          <p>日入</p>
        </span>
        <span>
          {/* <p>{realTemp}</p> */}
          {/* <p>{weatherData.main.humidity}</p> */}
          {/* <p>{weatherData.wind.speed}</p> */}
          <p>波高</p>
          <p>満潮</p>
          <p>干潮</p>
          <p>日出</p>
          <p>日入</p>
        </span>
        <span>
          <p>℃</p>
          <p>%</p>
          <p>m/s</p>
          <p>m</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </span>
      </div>
      <p>釣りをするなら</p>
    </React.Fragment>
  );
};

const style = {
  weather: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    fontSize: "5px",
  },
};

export default Weather;
