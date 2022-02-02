import React from "react";
import Search from "../components/Search";
import background from "../images/HomeImage.jpg";
import { TiWeatherPartlySunny, TiShoppingCart } from "react-icons/ti";
import { MdTour } from "react-icons/md";
import { GiSpearfishing } from "react-icons/gi";

export const Home = () => {
  return (
    <React.Fragment>
      <div style={style.background}>
        <p style={style.top}>ほな、釣り行こか</p>
        <div style={style.info}>
          <p>もっと釣りを楽しもう！</p>
          <p>千葉県の行きたい釣り場を検索してみよう！</p>
        </div>
        <Search />
        <div style={style.explain}>
          <span style={style.explainTitle}>提供情報</span>
          <div style={style.box}>
            <div style={style.circle}>
              <TiWeatherPartlySunny />
            </div>
            <p style={style.text}>天気や波の情報</p>
          </div>
          <div style={style.box}>
            <div style={style.circle}>
              <GiSpearfishing />
            </div>
            <p style={style.text}>釣果情報</p>
          </div>
          <div style={style.box}>
            <div style={style.circle}>
              <TiShoppingCart />
            </div>
            <p style={style.text}>釣具屋情報</p>
          </div>
          <div style={style.box}>
            <div style={style.circle}>
              <MdTour />
            </div>
            <p style={style.text}>観光情報</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const style = {
  background: {
    // backgroundImage: `url(${background})`,
    // backgroundSize: "cover",
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#eaf6fd",
    margin: "0",
    marginTop: "0",
  },
  top: {
    fontSize: "10vw",
    fontFamily: "Arial unicode ms",
    textAlign: "center",
    paddingTop: "10vh",
    // backgroundColor: "tomato",
  },
  info: {
    fontSize: "2vh",
    textAlign: "center",
    padding: "0.5em 1em",
    margin: "2em 0",
    color: "black",
    background: "#e4fcff" /*背景色*/,
    borderTop: "solid 6px #1dc1d6",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)" /*影*/,
    width: "90vw",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Arial unicode ms",
  },
  coment: {
    fontSize: "0.1vw",
    textAlign: "right",
    margin: "5px",
  },
  icon: {},
  explain: {
    position: "relative",
    margin: "2em 0",
    padding: "0.5em 1em",
    border: "solid 3px #62c1ce",
    width: "84vw",
    display: "flex",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto",
  },
  explainTitle: {
    position: "absolute",
    display: "inline-block",
    top: "-27px",
    left: "-3px",
    padding: "0 9px",
    height: "25px",
    lineHeight: "25px",
    fontSize: "17px",
    background: "#62c1ce",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px 5px 0 0",
  },
  circle: {
    height: "8vh",
    width: "8vh",
    borderRadius: "50%",
    backgroundColor: "#62c1ce",
    fontSize: "6vh",
    textAlign: "center",
    color: "white",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)",
  },
  box: {
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: "1vw",
    marginBottom: "1vw",
  },
  text: {
    fontSize: "1vh",
    textAlign: "center",
    fontFamily: "Arial unicode ms",
  },
};
