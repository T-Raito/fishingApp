import React from "react";
import background from "../images/TopImage.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useLocation } from "react-router-dom";
// import FishingPlaceData from "../data/FishingPlaceData";

export const TourInfo = () => {
  // JSONファイルデータの取得
  //   const fishingPlaceData = FishingPlaceData;
  return (
    <div style={style.background}>
      <Header />
      <Footer />
    </div>
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
    // backgroundColor: "tomato",
  },
  top: {
    width: window.innerWidth,
    fontSize: "5vw",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    backgroundColor: "tomato",
  },
};
