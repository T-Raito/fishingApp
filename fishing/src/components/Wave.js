import React from "react";

const Wave = ({ waveData }) => {
  let days = new Date();
  let year = days.getFullYear();
  let month = days.getMonth() + 1;
  let day = days.getDate();
  let date = "";
  if (day !== 10 || 11 || 12) {
    date = year + "-0" + month + "-" + day;
  } else {
    date = year + "-" + month + "-" + day;
  }
  //   console.log(waveData.tide.chart[date]);
  //   console.log(date);
  return (
    <React.Fragment>
      <div style={style.wave}>
        <div>
          <p>画像</p>
        </div>
        <div style={style.waveinfo}>
          <span>
            <p>日出時刻</p>
            <p>日入時刻</p>
            <p>潮名</p>
            <p>干潮時刻</p>
            <p>満潮時刻</p>
          </span>
          <span>
            {/* <p>{waveData.tide.chart[date].sun.rise}</p>
            <p>{waveData.tide.chart[date].sun.set}</p>
            <p>{waveData.tide.chart[date].moon.title}</p>
            <p>
              {waveData.tide.chart[date].edd[0].time},
              {waveData.tide.chart[date].edd[1].time}
            </p>
            <p>
              {waveData.tide.chart[date].flood[0].time},
              {waveData.tide.chart[date].flood[1].time}
            </p> */}
          </span>
          <span>
            <p></p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
const style = {
  wave: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
  },
  waveinfo: {
    display: "grid",
    gridTemplateColumns: "4fr 4fr 1fr",
    fontSize: "5px",
    textAlign: "center",
  },
};
export default Wave;
