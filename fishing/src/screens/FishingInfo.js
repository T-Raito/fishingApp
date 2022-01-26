import React, { useState, useEffect } from "react";
import background from "../images/TopImage.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import WeatherUrl from "../components/WeatherUrl";
import Weather from "../components/Weather";
// import FishingPlaceData from "../data/FishingPlaceData";

export const FishingInfo = () => {
  const location = useLocation();
  const [resources, setResources] = useState({});

  console.log("location.placeData:", location.state.name);
  //   検索バーに入力された釣り場の気象データの取得
  const one = "weather?lat=";
  const getInPlace = async () => {
    try {
      const searchInPlace = await WeatherUrl.get(
        one +
          location.state.lat +
          "&lon=" +
          location.state.lon +
          "&APPID=f4c0da68baed4e299440386df3914148"
      );
      setResources(searchInPlace.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("resources:", resources);

  useEffect(() => {
    getInPlace();
  }, []);

  //
  //   //   let sunSetTime=;
  //   //   let sunRiseTime=;

  return (
    <React.Fragment>
      <div style={style.background}>
        <Header name={location.state.name} address={location.state.address} />
        <Weather weatherData={resources} />
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
