import React from 'react';
import { useDispatch } from 'react-redux';
import { setDelivery } from '@redux/delivery/actions';
import { useHistory } from 'react-router-dom';
import ContainerDeliveryForm from '@components/DeliveryItems/ContainerDeliveryForm';
import СontainerDeliveryMap from '@components/DeliveryItems/СontainerDeliveryMap';

import styles from './Delivery.module.scss';

const typeContent = ['formDelivery', 'mapDelivery'];

const Delivery = () => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(typeContent[0]);
  const history = useHistory();

  const setData = (dataForm) => {
    dispatch(setDelivery(dataForm));
  };

  const submitForm = (dataForm) => {
    setData(dataForm);
    history.push('/');
  };

  const changeContentDelivery = () => {
    const newContent = content === typeContent[0] ? typeContent[1] : typeContent[0];
    setContent(newContent);
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
            setData={ setData }
          />
      }

    </div>
  );
};

export default Delivery;
