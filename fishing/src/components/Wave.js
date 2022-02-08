import React from "react";

const Wave = ({ waveData }) => {
  let days = new Date();
  let year = days.getFullYear();
  let month = days.getMonth() + 1;
  let day = days.getDate();
  let date = "";
  if (month !== 10 || 11 || 12) {
    if (day === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
      date = year + "-0" + month + "-0" + day;
    } else {
      date = year + "-0" + month + "-" + day;
    }
  } else {
    if (day === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
      date = year + "-" + month + "-0" + day;
    } else {
      date = year + "-" + month + "-" + day;
    }
  }

  const wave =
    waveData &&
    waveData.tide.chart[date].edd[0].time +
      "," +
      waveData.tide.chart[date].edd[1].time;

  // console.log("waveData:", waveData);

  return (
    <React.Fragment>
      <div style={style.wave}>
        <div style={style.waveinfo}>
          <span>
            <p>日出</p>
            <p>日入</p>
            <p>潮名</p>
            <p>干潮</p>
            <p>満潮</p>
          </span>
          <span>
            {waveData && (
              <div>
                <p>{waveData.tide.chart[date].sun.rise}</p>
                <p>{waveData.tide.chart[date].sun.set}</p>
                <p>{waveData.tide.chart[date].moon.title}</p>

                <p>
                  {waveData.tide.chart[date].edd.length === 2
                    ? wave
                    : waveData.tide.chart[date].edd[0].time}
                </p>

                <p>
                  {waveData.tide.chart[date].flood[0].time},
                  {waveData.tide.chart[date].flood[1].time}
                </p>
              </div>
            )}
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
  wave: {},
  waveinfo: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    fontSize: "2vh",
    textAlign: "center",
  },
};
export default Wave;
