import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourPlaceData from "../data/TourPlaceData";
import { useLocation } from "react-router-dom";

export const TourInfo = () => {
  const location = useLocation();
  // JSONファイルデータの取得
  const tourPlaceDatas = TourPlaceData;
  const setTourData = tourPlaceDatas.filter(
    (tourPlaceData) => tourPlaceData.city === location.state
  );
  return (
    <div style={style.background}>
      <Header name="観光情報" />
      <div style={style.info}>
        <p>せっかくの遠出なら、観光もして帰ろう！</p>
      </div>
      {setTourData && (
        <div>
          <ul style={style.list}>
            {setTourData.map((setTourData, index) => (
              <li key={index}>
                <div style={style.tourBack}>
                  <div style={style.border}>
                    <p style={style.type}>{setTourData.type}</p>
                    <a
                      href={setTourData.link}
                      target="_blank"
                      style={style.name}
                    >
                      {setTourData.name}
                    </a>
                  </div>
                  <p style={style.address}>{setTourData.address}</p>
                  <p style={style.text}>{setTourData.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
};
const style = {
  background: {
    margin: "0",
    backgroundSize: "cover",
    backgroundColor: "#eaf6fd",
  },
  type: {
    padding: "0.5em 1em",
    margin: "2em 2em",
    fontWeight: "bold",
    color: "#6091d3" /*文字色*/,
    background: "#FFF",
    border: "solid 1px #6091d3" /*線*/,
    borderRadius: "15vh" /*角の丸み*/,
    display: "inline-block",
    fontSize: "1vh",
  },
  name: {
    fontSize: "2vh",
  },
  address: {
    paddingLeft: "2vw",
    paddingRight: "2vw",
    fontSize: "13px",
    // backgroundColor: "tomato",
  },
  tourBack: {
    width: "80vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
    paddingBottom: "5px",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)",
    marginBottom: "1vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  info: {
    width: "80vw",
    fontSize: "2vh",
    textAlign: "center",
    padding: "0.5em 1em",
    margin: "2em 0",
    color: "black",
    background: "#e4fcff" /*背景色*/,
    borderTop: "solid 6px #1dc1d6",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)" /*影*/,
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    paddingLeft: "2vw",
    paddingRight: "2vw",
    fontSize: "15px",
    marginBottom: "0px",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0px",
  },
  border: {
    borderBottom: "solid 1px rgba(0, 0, 0, 0.32)",
  },
};
