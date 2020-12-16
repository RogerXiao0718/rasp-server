import React, { useState, useEffect } from "react";
import BouncingLoader from "../BouncingLoader";
import io from "socket.io-client";

import "./styles.css";

const Main = () => {
  const [socket, setSocket] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const socket = io();
    socket.on("connect", () => {
      console.log("websocket connected!");
      socket.on("sensor data", (d) => {
        d = JSON.parse(d);

        setData(d);
      });
    });
    setSocket(socket);
  }, []);
  return (
    <div className="main">
      {data ? (
        <div className="data-displayer">
          <div>
            Temperature: <span className="temp">{data.temp}°C</span>
          </div>
          <div>
            Humidity: <span className="humidity">{data.hum}%</span>
          </div>
        </div>
      ) : (
        <BouncingLoader />
      )}
    </div>
  );
};

export default Main;
