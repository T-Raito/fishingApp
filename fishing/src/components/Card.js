import React from "react";

const Card = ({ name, onClick }) => {
  return (
    <div>
      <button style={style.card} onClick={onClick}>
        <p>{name}</p>
      </button>
    </div>
  );
};

const style = {
  card: {
    width: "50vw",
    height: "10vh",
    borderRadius: "5vh",
    fontSize: "2vh",
    fontFamily: "Comic Sans MS",
    backgroundColor: "rgba(220,220,220,0.5)",
    marginBottom: "1vh",
    marginLeft: "25vw",
  },
};

export default Card;
