import React from 'react';
import { useDispatch } from 'react-redux';
import { setDelivery } from '@redux/form/actions';
// import { Link } from 'react-router-dom';

import MapYandex from '@components/MapYandex';
import Button from '@components/Button';
import DeliveryForm from './DeliveryForm';

import styles from './Delivery.module.scss';

const typeContent = ['formDelivery', 'mapDelivery'];

const Delivery = () => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(typeContent[0]);

  const submitForm = (valuesOfData) => {
    dispatch(setDelivery(valuesOfData));
  };

  const changeContentDelivery = () => {
    const newContent = content === typeContent[0] ? typeContent[1] : typeContent[0];
    setContent(newContent);
  };

  const СontainerDeliveryForm = (
    <div>
      <div className={ styles.description }>
        Введите адрес или выберите дом
        <span className={ styles.descriptionMap } onClick={ changeContentDelivery }> на карте</span>
      </div>
      <DeliveryForm submitForm={ submitForm } />
    </div>
  );

  const СontainerDeliveryMap = (
    <div>
      <div className={ styles.button }>
        <Button className={ 'buttonBack' } onClick={ changeContentDelivery }>Назад</Button>
      </div>
      <MapYandex />
    </div>
  );

  return (
    <div className={ styles.container } >
      <h2 className={ styles.title }>Адрес</h2>

      {content === typeContent[0]
        ? СontainerDeliveryForm
        : СontainerDeliveryMap }
    </div>
  );
};

export default Delivery;
