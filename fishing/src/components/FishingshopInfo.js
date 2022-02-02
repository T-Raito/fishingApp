import React from "react";

const FishingShopInfo = ({ city }) => {
  const googleMapLink =
    "https://www.google.co.jp/maps/search/" + city + " 釣具屋";
  return (
    <React.Fragment>
      <div style={style.fishingShopInfo}>
        <a href={googleMapLink} target="_blank">
          釣り具屋を探す
        </a>
      </div>
    </React.Fragment>
  );
};

const style = {
  fishingShopInfo: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
  },
};

export default FishingShopInfo;
