import React from "react";

const TwitterInfo = ({ name }) => {
  // console.log("twitterData:", twitterData);
  const twitterLink =
    "https://twitter.com/search?q=" + name + " 釣果&src=typed_query&f=live";

  return (
    <React.Fragment>
      <div style={style.twitterInfo}>
        <p>
          <a href={twitterLink} target="_blank">
            Twitter
          </a>
          で確認！
        </p>
        <p>
          見つからない場合は、アングラーズなどのFishingAppを確認してみよう！
        </p>
      </div>
    </React.Fragment>
  );
};

const style = {
  twitterInfo: {
    width: "80vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "2vw",
    textAlign: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "2vh",
  },
};

export default TwitterInfo;
