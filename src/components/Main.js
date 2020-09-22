import React, { useState, useEffect } from "react";
import { Progress } from "reactstrap";

function Timer(props) {
  let { time } = props;
  return (
    <div>
      <div className="text-center">
        {time === 0 ? "Times Up!" : time + " seconds left"}
      </div>
      <Progress value={100 - time} color="danger" />
    </div>
  );
}
function Main(props) {
  const [time, setTime] = useState(100);
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);
  return (
    <div className="container">
      <Timer time={time} />
    </div>
  );
}

export default Main;
