import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Api from '@api';


const MapYandex = () => {
  const [placemark, setPlacemark] = React.useState(null);


  const onChangePlacemark = (e) => {
    const coords = e.get('coords');
    console.log(coords);
    console.log(Api.getDataMap(coords));
    setPlacemark(<Placemark
      geometry={coords}
      properties={{
        balloonContentBody:
          'This is balloon loaded by the Yandex.Maps API module system',
      }}
    />);
  };

  return (

    <YMaps
      query={{
        ns: 'use-load-option',
        load:
          'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
      }}
    >
      <div>
        My awesome application with maps!
      <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          width={700}
          height={400}
          onClick={onChangePlacemark}
        >
          {placemark}
        </Map>
      </div>
    </YMaps>
  );
};

export default MapYandex;