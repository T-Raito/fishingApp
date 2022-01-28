import React from "react";

const TwitterInfo = () => {
  return (
    <React.Fragment>
      <div style={style.twitterInfo}>
        <p>釣果</p>
      </div>
    </React.Fragment>
  );
};

const style = {
  twitterInfo: {
    width: "90vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
  },
};

export default TwitterInfo;
