import React from "react";

const Wave = ({ waveData }) => {
  let days = new Date();
  let year = days.getFullYear();
  let month = days.getMonth() + 1;
  let day = days.getDate();
  let date =
    year + "-" + ("00" + month).slice(-2) + "-" + ("00" + day).slice(-2);
  const wave =
    waveData &&
    waveData.tide.chart[date].edd[0].time +
      "," +
      waveData.tide.chart[date].edd[1].time;
  return (
    <React.Fragment>
      <div style={style.wave}>
        <div style={style.waveinfo}>
          <ul style={style.list}>
            <li style={style.item}>日出</li>
            <li style={style.item}>日入</li>
            <li style={style.item}>潮名</li>
            <li style={style.item}>干潮</li>
            <li style={style.item}>満潮</li>
          </ul>
          {waveData && (
            <ul style={style.list}>
              <li style={style.item}>{waveData.tide.chart[date].sun.rise}</li>
              <li style={style.item}>{waveData.tide.chart[date].sun.set}</li>
              <li style={style.item}>{waveData.tide.chart[date].moon.title}</li>
              <li style={style.item}>
                {waveData.tide.chart[date].edd.length === 2
                  ? wave
                  : waveData.tide.chart[date].edd[0].time}
              </li>
              <li style={style.item}>
                {waveData.tide.chart[date].flood[0].time},
                {waveData.tide.chart[date].flood[1].time}
              </li>
            </ul>
          )}
          <ul style={style.list}>
            <li></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
const style = {
  waveinfo: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    fontSize: "2vh",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0px",
  },
  item: {
    marginBottom: "2vh",
    textAlign: "center",
  },
};
export default Wave;
