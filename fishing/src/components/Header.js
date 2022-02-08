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
        <ul style={style.list}>
          <li>{name}</li>
          <li>
            <a href={googleMapLink} target="_blank" style={style.address}>
              {address}
            </a>
          </li>
        </ul>
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
    // backgroundColor: "#CCCACA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial unicode ms",
  },
  title: {
    width: "65vw",
    textAlign: "center",
    fontSize: "3vh",
  },
  address: {
    fontSize: "2vh",
    margin: "0",
  },
  box: {
    width: "10vw",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0px",
  },
};
export default Header;
