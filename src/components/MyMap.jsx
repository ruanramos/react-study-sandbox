import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import Minimap from "@aesqe/mapboxgl-minimap";
import styled from "styled-components";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoicnVhbnJhbW9zIiwiYSI6ImNraXoyZGVnZzJhbTYydnJ4Ym83dzQ5cncifQ.qt0GmYABFUefBABqudCoWw";
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const DEFAULT_ZOOM = 13;
const MyMap = (props) => {
  const mapContainerRef = useRef(null);
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
    newMap.on("move", () => {
      setLng(newMap.getCenter().lng);
      setLat(newMap.getCenter().lat);
      setZoom(newMap.getZoom());
    });
    // newMap.on("style.load", function () {
    //   // Possible position values are 'bottom-left', 'bottom-right', 'top-left', 'top-right'
    //   newMap.addControl(new mapboxgl.Minimap(), "top-right");
    // });

    const minimap = new mapboxgl.Minimap({
      center: [-73.94656812952897, 40.72912351406106],
      zoom: 6,
      zoomLevels: [],
      togglePosition: "topleft"
    });
    newMap.addControl(minimap, "bottom-right");

    newMap.on("load", function () {
      newMap.addControl(
        new mapboxgl.Minimap({
          center: [-73.94656812952897, 40.72912351406106],
          zoom: 6,
          zoomLevels: []
        }),
        "top-right"
      );
    });

    const nav = new mapboxgl.NavigationControl();
    const directions = new MapboxDirections({
      accessToken: MAPBOX_ACCESS_TOKEN
    });
    newMap.addControl(nav);
    newMap.addControl(directions, "top-left");

    console.log(newMap);
  }, []);

  return (
    <div>
      <div>
        <MySidebar>
          Longitude: {lng.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom:{" "}
          {zoom.toFixed(2)}
        </MySidebar>
      </div>
      <div ref={mapContainerRef} className="mapContainer" />
    </div>
  );
};

export const MySidebar = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  background-color: #404040;
  color: #ffffff;
  z-index: 1 !important;
  padding: 6px;
  font-weight: bold;
`;

export default MyMap;
