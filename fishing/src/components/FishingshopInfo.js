import React from "react";

const FishingshopInfo = () => {
  return (
    <React.Fragment>
      <div style={style.twitterInfo}>
        <p>釣り具屋を探す</p>
      </div>
    </React.Fragment>
  );
};

const style = {
  fishingshopInfo: {
    width: "90vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
  },
};

export default FishingshopInfo;
