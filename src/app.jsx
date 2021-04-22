import React, { useEffect, useRef } from 'react';
import style from './style';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// import { Layer } from 'layer-manager/dist/components';
import LayerManager, { PluginMapboxGl } from 'layer-manager';

const layer = {
  id: 'custom-layers',
  type: 'raster',
  source: {
    type: 'raster',
    tiles: [
      'http://earthengine.google.org/static/hansen_2013/gain_alpha/{z}/{x}/{y}.png'
    ],
    minzoom: 0,
    maxzoom: 12
  },
  render: {
    layers: [
      {
        minzoom: 0, // https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#minzoom
        maxzzom: 12, // https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#maxzoom
        paint: {
          'raster-saturation': -1
        }
      }
    ]
  }
};

function App() {
  const mapRef = useRef();
  let map;
  useEffect(() => {
    if (mapRef.current) {
      map = new mapboxgl.Map({
        container: mapRef.current,
        center: [8.3221, 46.5928],
        zoom: 1,
        style
      });
      map.addControl(new mapboxgl.NavigationControl());
    }
  }, [mapRef.current]);

  const loaded = map && map.style._loaded;
  useEffect(() => {
    if (map && map.style._loaded) {
      const layerManager = new LayerManager(map, PluginMapboxGl);

      layerManager.add(layer);
    }
  }, [map, loaded]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
      </header>
      <div ref={mapRef} id="map"></div>
    </div>
  );
}

export default App;
