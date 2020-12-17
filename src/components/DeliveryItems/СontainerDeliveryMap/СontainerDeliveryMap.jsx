import React from 'react';
import MapYandex from '@components/MapYandex';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { printDataByCoords } from '@utils/utils';
import { ModalConfirm } from '@components';
import { useModal } from '@components/Hooks';

import greyArowLeftSvg from '@assets/img/grey-arrow-left.svg';

import styles from './ContainerDeliveryMap.module.scss';

const ContainerDeliveryMap = ({ changeContent, setData }) => {
  const [optionModal, setOptionModal, onCloseModal] = useModal();

  const setDataByCoords = (dataByCoords) => {
    setData(dataByCoords);
    setOptionModal({
      isOpen: true,
      body: `${printDataByCoords(dataByCoords)}`,
      title: 'Адрес',
    });
  };

  const onConfirmModal = () => {
    onCloseModal();
    changeContent();
  };

  return (
    <>
      <div>
        <div className={ styles.button }>
          <Button className={ 'buttonGoBack' } onClick={ changeContent } outline>
            <Icon src={ greyArowLeftSvg } />

            <span>Вернуться назад</span>
          </Button>
        </div>
        <MapYandex setDataByCoords={ setDataByCoords } />
      </div>
      {optionModal.isOpen
      && <ModalConfirm
        body={ optionModal.body }
        closeModal={ onCloseModal }
        confirmOperation={ onConfirmModal }
        isOpen={ optionModal.isOpen }
        title={ optionModal.title }
         />}
    </>
  );
};

export default ContainerDeliveryMap;
