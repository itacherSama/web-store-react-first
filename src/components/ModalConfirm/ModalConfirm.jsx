import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button';
import Icon from '@components/Icon';
import crossSvg from '@assets/img/cross.svg';
import styles from './ModalConfirm.module.scss';

const ModalConfirm = ({
  closeModal, confirmOperation, title, body,
}) => {
  const modalWrapperRef = React.useRef();

  const outsideClickHandler = (event) => {
    if (event.target === modalWrapperRef.current) {
      closeModal();
    }
  };

  return (
    <div
      className={ styles.modalConfirmWrapper }
      onClick={ (event) => outsideClickHandler(event) }
      ref={ modalWrapperRef }
    >
      <div className={ styles.modalConfirm }>
        <div className={ styles.header }>
          <div className={ styles.title }>{title}</div>
          <div className={ styles.close } onClick={ closeModal } >
            <Button className={ 'buttonCircle buttonRemove' } onClick={ closeModal } outline>
              <Icon src={ crossSvg } />
            </Button>
          </div>
        </div>
        {body && <div className={ styles.body }>{body}</div>}

        <div className={ styles.response }>
          <Button onClick={ confirmOperation }><span>Подтвердить</span></Button>
          <Button onClick={ closeModal }><span>Отклонить</span></Button>
        </div>
      </div>
    </div>
  );
};

ModalConfirm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  confirmOperation: PropTypes.func.isRequired,
};

export default ModalConfirm;
