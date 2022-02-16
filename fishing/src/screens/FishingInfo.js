import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  let date =
    year + "-" + ("00" + month).slice(-2) + "-" + ("00" + day).slice(-2);
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
    "get_tide.php?pc=12&hc=" +
    location.state.waveID +
    "&yr=" +
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
        <div style={style.info}>
          <p>釣り場の天気を確認しよう。</p>
          <p>
            {waveData &&
              (waveData.tide.chart[date].moon.title === "大潮"
                ? "今日は大潮。干満の差が大きいので釣り日和だぞ！"
                : waveData.tide.chart[date].moon.title === "中潮"
                ? "今日は中潮。干満の差が大きいので釣り日和だぞ！"
                : "気温にあった服装をしよう！")}
          </p>
        </div>
        <WeatherInfo
          weatherData={weatherData}
          waveData={waveData}
          waveID={location.state.waveID}
        />
        <div style={style.info}>
          <p>最近釣れている魚を事前にチェックしよう！</p>
        </div>
        <TwitterInfo name={location.state.name} />
        <div style={style.info}>
          <p>釣果で確認した魚に適した仕掛けや餌を購入しよう！</p>
          <p>分からない場合は釣具屋さんへ聞いてみよう！</p>
        </div>
        <FishingShopInfo city={location.state.city} />
        <Footer tourCity={location.state.tourCity} />
      </div>
    </React.Fragment>
  );
};
const style = {
  background: {
    margin: "0",
    fontFamily: "Arial unicode ms",
    backgroundColor: "#eaf6fd",
  },
  box: {
    width: "90vw",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  info: {
    textAlign: "center",
    padding: "0.5em 1em",
    margin: "2em 0",
    color: "black",
    background: "#e4fcff" /*背景色*/,
    borderTop: "solid 6px #1dc1d6",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)" /*影*/,
    width: "80vw",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "2vh",
  },
};
