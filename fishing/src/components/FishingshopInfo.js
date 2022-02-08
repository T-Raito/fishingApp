import React from "react";

const FishingShopInfo = ({ city }) => {
  const googleMapLink =
    "https://www.google.co.jp/maps/search/" + city + " 釣具屋";
  return (
    <React.Fragment>
      <div style={style.fishingShopInfo}>
        <p>
          <a href={googleMapLink} target="_blank">
            GoogleMap
          </a>
          で釣具屋を探す
        </p>
      </div>
    </React.Fragment>
  );
};

const style = {
  fishingShopInfo: {
    width: "80vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
    textAlign: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5vh",
    fontSize: "2vh",
  },
};

export default FishingShopInfo;
