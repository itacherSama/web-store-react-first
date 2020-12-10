import React from 'react';
import DeliveryForm from './DeliveryForm';

import styles from './DeliveryForm/DeliveryForm.module.scss';

const СontainerDeliveryForm = ({ changeContent, submitForm }) => (
  <div>
    <div className={ styles.description }>
      Введите адрес или выберите дом
      <span className={ styles.descriptionMap } onClick={ changeContent }> на карте</span>
    </div>
    <DeliveryForm submitForm={ submitForm } />
  </div>
);

export default СontainerDeliveryForm;
