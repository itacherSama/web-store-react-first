import React from 'react';
import { useDispatch } from 'react-redux';
import { setDelivery } from '@redux/form/actions';
// import { Link } from 'react-router-dom';

import DeliveryForm from './DeliveryForm';

import styles from './Delivery.module.scss';

const Delivery = () => {
  const dispatch = useDispatch();

  const submitForm = (values) => {
    console.log(values);
    dispatch(setDelivery);
  };

  return (
    <div className={ styles.container } >
      <div className={ styles.title }>Адрес</div>
      <div className={ styles.description }>
        Введите адрес или выберите дом <ins> на карте</ins>
      </div>
      <div className="form">
        {<DeliveryForm submitForm={ submitForm } />}
      </div>
    </div>
  );
};

export default Delivery;
