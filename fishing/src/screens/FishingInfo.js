import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import background from "../images/TopImage.jpg";
import Header from "../components/Header";
import WeatherInfo from "../components/WeatherInfo";
import TwitterInfo from "../components/TwitterInfo";
import FishingShopInfo from "../components/FishingShopInfo";
import Footer from "../components/Footer";
import WeatherUrl from "../components/WeatherUrl";
import WaveUrl from "../components/WaveUrl";

export const FishingInfo = () => {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState({});
  const [waveData, setWaveData] = useState();
  let days = new Date();
  let year = days.getFullYear();
  let month = days.getMonth() + 1;
  let day = days.getDate();
  //   検索バーに入力された釣り場の１日分気象データの取得
  const one = "weather?lat=";
  const getWeatherInPlace = async () => {
    try {
      const searchWeatherInPlace = await WeatherUrl.get(
        one +
          location.state.lat +
          "&lon=" +
          location.state.lon +
          "&APPID=f4c0da68baed4e299440386df3914148"
      );
      setWeatherData(searchWeatherInPlace.data);
    } catch (err) {
      console.log(err);
    }
  };
  // 波の情報取得
  const two =
    "get_tide.php?pc=12&hc=1&yr=" +
    year +
    "&mn=" +
    month +
    "&dy=" +
    day +
    "&rg=day";
  const getWaveInPlace = async () => {
    try {
      const searchWaveInPlace = await WaveUrl.get(two);
      setWaveData(searchWaveInPlace.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeatherInPlace();
    getWaveInPlace();
  }, []);

  return (
    <React.Fragment>
      <div style={style.background}>
        <Header name={location.state.name} address={location.state.address} />
        <WeatherInfo weatherData={weatherData} waveData={waveData} />
        <TwitterInfo />
        <FishingShopInfo />
        <Footer />
      </div>
    </React.Fragment>
  );
};
const style = {
  background: {
    margin: "0",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    width: window.innerWidth,
    height: window.innerHeight,
    marginLeft: "0px",
  },
};
