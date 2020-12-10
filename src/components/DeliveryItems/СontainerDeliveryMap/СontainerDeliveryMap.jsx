import React from 'react';
import MapYandex from '@components/MapYandex';
import Button from '@components/Button';
import Icon from '@components/Icon';

import greyArowLeftSvg from '@assets/img/grey-arrow-left.svg';

import styles from './ContainerDeliveryMap.module.scss';

const ContainerDeliveryMap = ({ changeContent, setDataByCoords }) => (
  <div>
    <div className={ styles.button }>
      <Button className={ 'buttonGoBack' } onClick={ changeContent } outline>
        <Icon src={ greyArowLeftSvg } />

        <span>Вернуться назад</span>
      </Button>
    </div>
    <MapYandex setDataByCoords={ setDataByCoords } />
  </div>
);

export default ContainerDeliveryMap;
