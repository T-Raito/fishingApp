import React from "react";
import { GiFishingHook, GiDoubleFish } from "react-icons/gi";
import { IconContext } from "react-icons";
const Header = ({ name, address }) => {
  const googleMapLink = "https://www.google.co.jp/maps/search/" + address;
  return (
    <div style={style.header}>
      <span style={style.box}>
        <IconContext.Provider value={{ size: "10vw", color: "black" }}>
          <GiFishingHook />
        </IconContext.Provider>
      </span>
      <span style={style.title}>
        <p>{name}</p>
        <a href={googleMapLink} target="_blank" style={style.address}>
          {address}
        </a>
      </span>
      <span style={style.box}>
        <IconContext.Provider value={{ size: "10vw", color: "black" }}>
          <GiDoubleFish />
        </IconContext.Provider>
      </span>
    </div>
  );
};
const style = {
  header: {
    backgroundColor: "#CCCACA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial unicode ms",
  },
  title: {
    width: "50vw",
    textAlign: "center",
  },
  address: {
    fontSize: "10px",
  },
  box: {
    width: "10vw",
  },
};
export default Header;
