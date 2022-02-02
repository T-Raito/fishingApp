import React from "react";
import Weather from "../components/Weather";
import Wave from "../components/Wave";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";

const WeatherInfo = ({ weatherData, waveData }) => {
  let days = new Date();
  let year = days.getFullYear();
  let month = days.getMonth() + 1;
  let day = days.getDate();
  const three =
    "https://api.tide736.net/tide_image.php?pc=12&hc=1&yr=" +
    year +
    "&mn=" +
    month +
    "&dy=" +
    day +
    "&rg=day&w=640&h=512&lc=blue&gcs=cyan&gcf=blue&ld=on&ttd=on&tsmd=on";
  return (
    <React.Fragment>
      <div style={style.weatherBack}>
        <div style={style.weatherinfo}>
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
          <Weather weatherData={weatherData} />
          <Wave waveData={waveData} />
        </div>
        <img src={three} style={style.image} />
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
    gridTemplateColumns: "1fr 1fr 2fr",
    marginLeft: "5vw",
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
};
export default WeatherInfo;
