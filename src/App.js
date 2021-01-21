import React, { useEffect, useState } from "react";
import { MyList } from "./components/MyList";
import "./styles.css";
import { Counter } from "./components/Counter";
import MyApp from "./MyApp";
import MyMap from "./components/MyMap";
//import { } from "@aesqe/mapboxgl-minimap";
import { Fetcher } from "./components/Fetcher";
import {Grid} from "./components/Grid";

export default function App() {
  const [navigatorCoords, setNavigatorCoords] = useState(null);

  const successCallback = (position) => {
    setNavigatorCoords(position.coords);
  };

  const errorCallback = () => {
    setNavigatorCoords({ latitude: -43, longitude: -22 });
  };

  const getUserLocation = () => {
    return navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      { enableHighAccuracy: true }
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="App">
      {/* <MyApp /> */}
      {/* {navigatorCoords ? (
        <MyMap lat={navigatorCoords.latitude} lng={navigatorCoords.longitude} />
      ) : null} */}
      <MyList />
      <Counter />
      <Fetcher />
      <Grid />
    </div>
  );
}
