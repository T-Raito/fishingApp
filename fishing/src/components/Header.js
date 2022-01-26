import React from "react";
import { GiFishingHook, GiDoubleFish } from "react-icons/gi";
import { IconContext } from "react-icons";
const Header = ({ name, address }) => {
  return (
    <div style={style.header}>
      <span style={style.box}>
        <IconContext.Provider value={{ size: "3vh", color: "black" }}>
          <GiFishingHook />
        </IconContext.Provider>
      </span>
      <span style={style.title}>
        <p>{name}</p>
        <p>{address}</p>
      </span>
      <span style={style.box}>
        <IconContext.Provider value={{ size: "3vh", color: "black" }}>
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
  },
  title: {
    width: "50vw",
    textAlign: "center",
  },
  box: {
    width: "10vw",
  },
};
export default Header;
