import React from "react";
import Weather from "../components/Weather";
import Wave from "../components/Wave";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";

const WeatherInfo = ({ weatherData, waveData, waveID }) => {
  let days = new Date();
  let year = days.getFullYear();
  let month = days.getMonth() + 1;
  let day = days.getDate();
  const three =
    "https://api.tide736.net/tide_image.php?pc=12&hc=" +
    waveID +
    "&yr=" +
    year +
    "&mn=" +
    month +
    "&dy=" +
    day +
    "&rg=day&w=640&h=512&lc=black&gcs=aqua&gcf=lightcyan&ld=on&ttd=off&tsmd=off";
  return (
    <React.Fragment>
      <div style={style.weatherBack}>
        <div style={style.icon}>
          {weatherData.name && (
            <IconContext.Provider value={{ size: "15vh", color: "black" }}>
              {weatherData.weather[0].main === "Clear" ? (
                <WiDaySunny />
              ) : weatherData.weather[0].main === "Rain" ? (
                <WiHail />
              ) : weatherData.weather[0].main === "Clouds" ? (
                <WiCloudy />
              ) : (
                <p>{weatherData.weather[0].main}</p>
              )}
            </IconContext.Provider>
          )}
        </div>
        <div style={style.weatherinfo}>
          <Weather weatherData={weatherData} />
          <Wave waveData={waveData} />
        </div>
        <img src={three} style={style.image} />
        <p style={style.subInfo}>
          ※本情報は検索地点に一番近い情報を掲載しています。
        </p>
      </div>
    </React.Fragment>
  );
};
const style = {
  weatherBack: {
    width: "90vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
    marginLeft: "auto",
    marginRight: "auto",
  },
  weatherinfo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
    textAlign: "center",
  },
  image: {
    width: "80vw",
    marginLeft: "5vw",
    marginBottom: "1vh",
  },
  icon: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  subInfo: {
    fontSize: "1px",
    textAlign: "center",
    paddingBottom: "1vh",
  },
};
export default WeatherInfo;
