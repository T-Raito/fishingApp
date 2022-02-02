import React, { useState } from "react";
import { Timeline, Tweet, Hashtag } from "react-twitter-widgets";
import TwitterUrl from "./TwitterUrl";

const TwitterInfo = ({ name }) => {
  const [twitterData, setTwitterData] = useState({});
  const getTwitterInPlace = async () => {
    try {
      const searchTwitterData = await TwitterUrl.get();
      setTwitterData(searchTwitterData.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("twitterData:", twitterData);
  const twitterLink =
    "https://twitter.com/search?q=" + name + " 釣果&src=typed_query&f=live";

  // const twitterLink =
  // "https://twitter.com/search?q=" + name + " 釣果&src=typed_query&f=live";

  // "https://api.twitter.com/2/users/by/username/$USERNAME" -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAFBlYAEAAAAAi%2FXRyB61GeCDPh5Rh3k%2FIKDhYx0%3Dd7vXncudoZek51wKQ2HbmYWpO3RVfn83hentRIL9I8zyxn4Fxl"
  return (
    <React.Fragment>
      <div style={style.twitterInfo}>
        <a href={twitterLink} target="_blank">
          釣果をみよう
        </a>
        <button onClick={getTwitterInPlace}>ここ押して</button>
      </div>
    </React.Fragment>
  );
};

const style = {
  twitterInfo: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
  },
};

export default TwitterInfo;
