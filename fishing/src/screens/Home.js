import React from "react";
import Search from "../components/Search";
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
        <div style={style.cityNames}>
          <div style={style.areaBox}>
            <p style={style.areaName}>内房 ( 東京湾側 )</p>
            <ul style={style.list}>
              <li>浦安市</li>
              <li>千葉市</li>
              <li>市原市</li>
              <li>袖ヶ浦市</li>
              <li>木更津市</li>
              <li>館山市</li>
              <li>鴨川市</li>
            </ul>
          </div>
          <div style={style.areaBox}>
            <p style={style.areaName}>外房 ( 太平洋側 )</p>
            <ul style={style.list}>
              <li>富津市</li>
              <li>安房郡</li>
              <li>南房総市</li>
              <li>勝浦市</li>
              <li>いすみ市</li>
              <li>夷隅郡</li>
              <li>山武郡</li>
              <li>長生郡</li>
              <li>旭市</li>
              <li>匝瑳市</li>
              <li>山武市</li>
              <li>銚子市</li>
            </ul>
          </div>
        </div>
        <div style={style.explain}>
          <span style={style.explainTitle}>提供情報</span>
          <div style={style.box}>
            <div style={style.circle}>
              <div style={style.icon}>
                <TiWeatherPartlySunny />
              </div>
            </div>
            <p style={style.text}>天気や波の情報</p>
          </div>
          <div style={style.box}>
            <div style={style.circle}>
              <div style={style.icon}>
                <GiSpearfishing />
              </div>
            </div>
            <p style={style.text}>釣果情報</p>
          </div>
          <div style={style.box}>
            <div style={style.circle}>
              <div style={style.icon}>
                <TiShoppingCart />
              </div>
            </div>
            <p style={style.text}>釣具屋情報</p>
          </div>
          <div style={style.box}>
            <div style={style.circle}>
              <div style={style.icon}>
                <MdTour />
              </div>
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
    margin: "0",
    backgroundColor: "#eaf6fd",
    paddingBottom: "100px",
  },
  top: {
    fontSize: "30px",
    fontFamily: "Arial unicode ms",
    textAlign: "center",
    paddingTop: "7vh",
    paddingLeft: "1vw",
    marginBottom: "7vh",
  },
  info: {
    fontSize: "15px",
    textAlign: "center",
    padding: "0.5em 1em",
    margin: "2em 0",
    color: "black",
    background: "#e4fcff",
    borderTop: "solid 6px #1dc1d6",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)",
    width: "80vw",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Arial unicode ms",
  },
  coment: {
    fontSize: "0.1vw",
    textAlign: "right",
    margin: "5px",
  },
  explain: {
    position: "relative",
    margin: "2em 0",
    padding: "0.5em 1em",
    border: "solid 3px #62c1ce",
    width: "74vw",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "0",
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
  box: {
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: "1vw",
    marginBottom: "1vw",
  },
  circle: {
    height: "8vh",
    width: "8vh",
    borderRadius: "50%",
    backgroundColor: "#62c1ce",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    fontSize: "6vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "5px",
    fontFamily: "Arial unicode ms",
    textAlign: "center",
  },
  list: {
    fontFamily: "Arial unicode ms",
    listStyle: "none",
    textAlign: "center",
    paddingLeft: "0px",
  },
  areaName: {
    textAlign: "center",
    fontFamily: "Arial unicode ms",
    color: "blue",
  },
  cityNames: {
    marginBottom: "2vh",
    display: "flex",
    justifyContent: "center",
  },
  areaBox: {
    width: "35vw",
  },
};
