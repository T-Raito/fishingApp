import React from "react";
import { GiFishing, GiWalk } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const Footer = ({ tourCity }) => {
  let navigate = useNavigate();
  const onHome = () => {
    navigate("/");
  };
  const onFishing = () => {
    navigate("/fishinginfo");
  };
  const onTour = () => {
    navigate("/tourinfo", {
      state: tourCity,
    });
  };
  return (
    <div style={style.bottom}>
      <span style={style.box} onClick={onHome}>
        <IconContext.Provider value={{ size: "3vh", color: "black" }}>
          <GoHome />
        </IconContext.Provider>
        <p style={style.font}>ホーム</p>
      </span>
      <span style={style.box} onClick={onFishing}>
        <IconContext.Provider value={{ size: "3vh", color: "black" }}>
          <GiFishing />
        </IconContext.Provider>
        <p style={style.font}>釣り</p>
      </span>
      <span style={style.box} onClick={onTour}>
        <IconContext.Provider value={{ size: "3vh", color: "black" }}>
          <GiWalk />
        </IconContext.Provider>
        <p style={style.font}>観光</p>
      </span>
    </div>
  );
};
const style = {
  bottom: {
    backgroundColor: "#CCCACA",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  box: {
    width: "10vw",
  },
  font: {
    textAlign: "center",
    fontSize: "10px",
  },
};

export default Footer;
