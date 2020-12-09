import React from 'react';
import { useDispatch } from 'react-redux';
import { setDelivery } from '@redux/form/actions';
// import { Link } from 'react-router-dom';

import MapYandex from '@components/MapYandex';
import Button from '@components/Button';
import Icon from '@components/Icon';

import greyArowLeftSvg from '@assets/img/grey-arrow-left.svg';
import Modal from '@components/Modal';

import DeliveryForm from './DeliveryForm';
import styles from './Delivery.module.scss';

const typeContent = ['formDelivery', 'mapDelivery'];

const Delivery = () => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(typeContent[1]);
  const [openModal, setOpenModal] = React.useState(false);

  const submitForm = (valuesOfData) => {
    dispatch(setDelivery(valuesOfData));
  };

  const changeContentDelivery = () => {
    const newContent = content === typeContent[0] ? typeContent[1] : typeContent[0];
    setContent(newContent);
  };

  const setPlace = (string) => {
    console.log(string);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
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
        <Button className={ 'buttonGoBack' } onClick={ changeContentDelivery } outline>
          <Icon src={ greyArowLeftSvg } />

          <span>Вернуться назад</span>
        </Button>
      </div>
      <MapYandex setPlace={ setPlace } />
    </div>
  );

  return (
    <div className={ styles.container } >
      <h2 className={ styles.title }>Адрес</h2>

      {content === typeContent[0]
        ? СontainerDeliveryForm
        : СontainerDeliveryMap }
      <Modal onClose={ onCloseModal } open={ openModal } />

    </div>
  );
};

export default Delivery;
