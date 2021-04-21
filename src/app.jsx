import React from 'react';
import style from './style';
import './mapbox-gl.css';
import './mapbox-gl';

function App() {
  var map = new mapboxgl.Map({
    container: 'map',
    center: [8.3221, 46.5928],
    zoom: 1,
    style: style
  });

  map.addControl(new mapboxgl.Navigation());

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
      </header>
      <div id="map"></div>
    </div>
  );
}

export default App;
