import React from "react";
import Search from "../components/Search";
import background from "../images/TopImage.jpg";

export const Home = () => {
  return (
    <div style={style.background}>
      <p style={style.top}>ほな、釣り行こか</p>
      <Search />
    </div>
  );
};
const style = {
  background: {
    margin: "0px",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    width: window.innerWidth,
    height: window.innerHeight,
    marginLeft: "0px",
    // backgroundColor: "tomato",
  },
  top: {
    width: window.innerWidth,
    // height: "50vh",
    fontSize: "10vw",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    color: "white",
  },
};
