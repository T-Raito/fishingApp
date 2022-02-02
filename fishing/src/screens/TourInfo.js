import React, { useEffect } from "react";
import background from "../images/TopImage.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourPlaceData from "../data/TourPlaceData";

export const TourInfo = () => {
  // const [tourData,setTourData]=useState([]);
  // JSONファイルデータの取得
  const tourPlaceDatas = TourPlaceData;
  // console.log("tourPlaceDatas:", tourPlaceDatas);
  const setTourData = tourPlaceDatas.filter(
    (tourPlaceData) => tourPlaceData.city === "銚子市"
  );
  console.log("setTourData:", setTourData);
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
                  <p style={style.type}>{setTourData.type}</p>
                  <a href={setTourData.link} target="_blank" style={style.name}>
                    {setTourData.name}
                  </a>
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
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    width: window.innerWidth,
    height: window.innerHeight,
    // marginLeft: "0px",
    // backgroundColor: "tomato",
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
    fontSize: "2vh",
    paddingLeft: "2vw",
  },
  tourBack: {
    width: "97vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
    paddingBottom: "5px",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)",
    marginBottom: "1vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  info: {
    width: "90vw",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "2vh",
    textAlign: "center",
    padding: "0.5em 1em",
    margin: "2em 0",
    color: "black",
    background: "#e4fcff" /*背景色*/,
    borderTop: "solid 6px #1dc1d6",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)" /*影*/,
  },
  text: {
    paddingLeft: "2vw",
    fontSize: "2vh",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0px",
  },
};
