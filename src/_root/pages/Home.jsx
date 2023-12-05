import React, { useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
});

const Home = () => {
  // const [viewport, setViewport] = useState({});

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     setViewport({
  //       ...viewport,
  //       latitude: pos.coords.latitude,
  //       longitude: pos.coords.longitude,
  //       zoom: 5,
  //     });
  //   });
  // }, []);

  return (
    <div className="h-full w-full">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-27.4442, 51.3233379650232]} />
        </Layer>
      </Map>
    </div>
  );
};

export default Home;
