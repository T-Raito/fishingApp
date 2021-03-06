import React, { useState } from "react";
import { IconContext } from "react-icons";
import Card from "../components/Card";
import { GiJellyfish } from "react-icons/gi";
import FishingPlaceData from "../data/FishingPlaceData";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [place, setPlace] = useState("");
  const [searchingPlace, setSearchingPlace] = useState("");
  const navigate = useNavigate();
  // JSONファイルデータの取得
  const fishingPlaceDatas = FishingPlaceData;
  // 検索バーの入力データの保存
  const handlePlace = (event) => {
    setPlace(event.target.value);
  };
  // finshingplaceDataから一致するオブジェクトの抽出
  const setPlaceData = fishingPlaceDatas.filter(
    (fishingPlaceData) => fishingPlaceData.tourCity === searchingPlace
  );
  const setPlaceName = () => {
    setSearchingPlace(place);
  };
  // データの受け渡し
  const onClick = () => {
    navigate("/fishinginfo", {
      state: setPlaceData[0],
    });
  };
  return (
    <div style={style.total}>
      <p style={style.search}>
        <input
          value={place}
          placeholder="地名を入力･･･"
          onChange={handlePlace}
          style={style.input}
        />
        <IconContext.Provider value={{ size: "7vw", color: "bLack" }}>
          <GiJellyfish onClick={setPlaceName} />
        </IconContext.Provider>
      </p>
      {searchingPlace[0] ? (
        <ul style={style.list}>
          {setPlaceData.map((setPlaceData, index) => (
            <li key={index}>
              <Card name={setPlaceData.name} onClick={onClick} />
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

const style = {
  total: {
    marginBottom: "2vh",
  },
  search: {
    marginLeft: "7vw",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    marginBottom: "2vh",
  },
  input: {
    font: "2.5vh sans-serif",
    fontcolor: "black",
    boxSizing: "border-box",
    width: "50%",
    height: "6vh",
    padding: "0.3em",
    transition: "0.3s",
    letterSpacing: "1px",
    border: "1px solid #ffffff",
    boxShadow: "1px 1px 2px 0 #707070 inset",
    borderRadius: "4px",
    marginRight: "4vw",
  },
  list: {
    height: "43vh",
    listStyle: "none",
    paddingLeft: "0px",
    overflowX: "hidden",
    overflowY: "scroll",
  },
};

export default Search;
