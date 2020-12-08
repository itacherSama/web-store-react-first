import React from 'react';

// import { Link } from 'react-router-dom';

import DeliveryForm from './DeliveryForm';

import styles from './Delivery.module.scss';

const Delivery = () => {
  const submitForm = (values) => {
    console.log(values);
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
