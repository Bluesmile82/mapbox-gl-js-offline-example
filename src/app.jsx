import React, { useState, useRef } from 'react';
// import { LayerManager, Layer } from 'layer-manager/dist/components';
// import { PluginMapboxGl } from 'layer-manager';
import ReactMapGL from 'react-map-gl';

import style from './style';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl';

function App() {
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef();

  // mapboxgl.accessToken = '<your access token here>';
  // var map = new mapboxgl.Map({
  //   container: 'map',
  //   center: [8.3221, 46.5928],
  //   zoom: 1,
  //   style: style
  // });

  // map.addControl(new mapboxgl.NavigationControl());

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
      </header>
      <ReactMapGL
        ref={mapRef}
        width="100%"
        height="100%"
        style={style}
        onLoad={() => setLoaded(true)}
        mapboxApiAccessToken={'MAPBOX_TOKEN'}
      >
        {/* {loaded && mapRef.current && (
          <LayerManager map={mapRef.current.getMap()} plugin={PluginMapboxGl}> */}
        {/* {activeLayers.map((l) => (
              <Layer key={l.id} {...l} />
            ))} */}
        {/* </LayerManager>
        )} */}
      </ReactMapGL>
      {/* <div id="map"></div> */}
    </div>
  );
}

export default App;
