import React from 'react';
import {
  YMaps, Map, Placemark,
} from 'react-yandex-maps';
import Api from '@api';

const dataParams = ['locality', 'street', 'house'];

const MapYandex = ({ setPlace }) => {
  const [placemark, setPlacemark] = React.useState(null);
  /* const [currentPlace, setCurrentPlace] = React.useState(null); */

  const printPlace = (place) => {
    const stringPlace = Object.values(place).join();
    return stringPlace;
  };

  const extractDataMap = (data) => {
    const itemWithDataMap = data
      .response
      .GeoObjectCollection
      .featureMember[0];

    if (!itemWithDataMap) {
      return false;
    }

    const arrayWithObjDataMap = itemWithDataMap
      .GeoObject
      .metaDataProperty
      .GeocoderMetaData
      .Address
      .Components;

    const needData = arrayWithObjDataMap.reduce(((newObject, el) => {
      if (!dataParams.includes(el.kind)) {
        return;
      }
      const res = {
        ...newObject,
        [el.kind]: el.name,
      };

      return res;
    }), {});

    return needData;
  };

  const getDataMap = async (coords) => {
    const dataMap = await Api.getDataMap(coords);
    const extractedDataMap = extractDataMap(dataMap);
    return extractedDataMap;
  };
  const onChangePlacemark = async (e) => {
    const coords = e.get('coords');
    const dataByCoords = await getDataMap(coords);
    if (!dataByCoords) return;
    /*     setCurrentPlace(dataByCoords); */
    setPlace(printPlace(dataByCoords));
    setPlacemark(
      <Placemark
        geometry={ coords }
        properties={ {
          balloonContentBody: ` ${printPlace(dataByCoords)}`,
        } }
      />,
    );
  };

  return (

    <YMaps
      query={ {
        ns: 'use-load-option',
        load:
          'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
      } }
    >
      <Map
        defaultState={ {
          center: [54.314192, 48.403123],
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl'],
        } }
        height={ 400 }
        onClick={ onChangePlacemark }
        width={ 700 }
      >

        {placemark}
      </Map>
    </YMaps>
  );
};

export default MapYandex;
