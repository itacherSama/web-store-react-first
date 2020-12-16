import React from 'react';
import { useDispatch } from 'react-redux';
import { setDelivery } from '@redux/delivery/actions';
import { useHistory } from 'react-router-dom';
import ContainerDeliveryForm from '@components/DeliveryItems/ContainerDeliveryForm';
import СontainerDeliveryMap from '@components/DeliveryItems/СontainerDeliveryMap';
import { printDataByCoords } from '@utils/utils';
import { ModalConfirm } from '@components';

import styles from './Delivery.module.scss';

const typeContent = ['formDelivery', 'mapDelivery'];

const Delivery = () => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(typeContent[0]);
  const history = useHistory();

  const [optionModal, setOptionModal] = React.useState({
    open: true,
    children: '',
    title: '',
  });

  const setData = (valuesOfData) => {
    dispatch(setDelivery(valuesOfData));
  };

  const submitForm = (valuesOfData) => {
    setData(valuesOfData);
    history.push('/');
  };

  const changeContentDelivery = () => {
    const newContent = content === typeContent[0] ? typeContent[1] : typeContent[0];
    setContent(newContent);
  };

  const setDataByCoords = (dataByCoords) => {
    setData(dataByCoords);
    setOptionModal({
      open: true,
      body: `${printDataByCoords(dataByCoords)}`,
      title: 'Адрес',
    });
  };

  const onCloseModal = () => {
    setOptionModal({
      open: false,
    });
  };

  const onSubmitModal = () => {
    onCloseModal();
    setContent(typeContent[0]);
  };

  return (
    <div className={ styles.container } >
      <h2 className={ styles.title }>Адрес</h2>

      {content === typeContent[0]
        ? <ContainerDeliveryForm
            changeContent={ changeContentDelivery }
            submitForm={ submitForm }
          />
        : <СontainerDeliveryMap
            changeContent={ changeContentDelivery }
            setDataByCoords={ setDataByCoords }
          /> }
      {optionModal.open
      && <ModalConfirm
        body={ optionModal.body } closeModal={ onCloseModal }
        confirmOperation={ onSubmitModal } open={ optionModal.open } title={ optionModal.title }
         />}

    </div>
  );
};

export default Delivery;
