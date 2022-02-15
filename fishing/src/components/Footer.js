import React from "react";
import { GiFishing, GiWalk } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { IconContext } from "react-icons";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = ({ tourCity }) => {
  let navigate = useNavigate();
  const { pathname } = useLocation("");
  const onHome = () => {
    navigate("/");
  };
  // ※質問箇所
  const onFishing = () => {
    if (pathname === "/tourinfo") {
      navigate(-1);
    }
  };
  const onTour = () => {
    if (pathname === "/fishinginfo") {
      navigate("/tourinfo", {
        state: tourCity,
      });
    }
  };

  return (
    <div style={style.bottom}>
      <span style={style.box} onClick={onHome}>
        <IconContext.Provider value={{ size: "8vw", color: "grey" }}>
          <GoHome />
        </IconContext.Provider>
        <p style={style.font}>ホーム</p>
      </span>
      <span style={style.box} onClick={onFishing}>
        {pathname === "/fishinginfo" ? (
          <IconContext.Provider value={{ size: "8vw", color: "black" }}>
            <GiFishing />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "8vw", color: "grey" }}>
            <GiFishing />
          </IconContext.Provider>
        )}
        <p style={style.font}>釣り</p>
      </span>
      <span style={style.box} onClick={onTour}>
        {pathname === "/tourinfo" ? (
          <IconContext.Provider value={{ size: "8vw", color: "black" }}>
            <GiWalk />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "8vw", color: "grey" }}>
            <GiWalk />
          </IconContext.Provider>
        )}
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
    paddingBottom: "1vw",
    textAlign: "center",
  },
  box: {
    width: "10vw",
  },
  font: {
    fontSize: "10px",
  },
};

export default Footer;
