import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Button, CartItem, ModalConfirm, CartEmpty,
} from '@components';
import {
  clearCart, incrementItem, decrementItem, deleteItem,
} from '@redux/cart/actions';
import Icon from '@components/Icon';
import { getItemsForSelector, getTotalPrice, getTotalItems } from '@redux/cart/selectors';

import trashSvg from '@assets/img/trash.svg';
import cartSvg from '@assets/img/cart.svg';
import greyArowLeftSvg from '@assets/img/grey-arrow-left.svg';

import styles from './Cart.module.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);
  const totalItems = useSelector(getTotalItems);
  const arrayItems = useSelector(getItemsForSelector);

  const [optionModal, setOptionModal] = React.useState({
    isOpen: false,
    children: '',
    title: '',
  });

  const onCloseModal = () => {
    setOptionModal({
      isOpen: false,
    });
  };

  const onIncrementItem = (item) => {
    dispatch(incrementItem(item));
  };

  const onDecrementItem = (item) => {
    dispatch(decrementItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const onDeleteItem = (item) => {
    dispatch(deleteItem(item));
  };

  const checkDeleteItem = (item) => {
    setOptionModal({
      isOpen: true,
      title: `Вы действительно хотите удалить \n ${item.name}`,
      confirm: (item) => onDeleteItem(item),
      close: () => onCloseModal(),
    });
  };

  if (!arrayItems.length) {
    return <CartEmpty />;
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.cart }>
        <div className={ styles.top }>
          <h2 className={ styles.title }>
            <Icon
              src={ cartSvg }
            />
            Корзина
          </h2>
          <div className={ styles.cartClear } onClick={ handleClearCart }>
            <Icon src={ trashSvg } />

            <span>Очистить корзину</span>
          </div>
        </div>
        <div className={ styles.items }>
          {
            arrayItems && arrayItems.map((itemBlock, idx) => (
              <CartItem
                itemBlock={ itemBlock }
                key={ `${idx}_${itemBlock}` }
                onDecrementItem={ onDecrementItem }
                onDeleteItem={ checkDeleteItem }
                onIncrementItem={ onIncrementItem }
              />
            ))
          }
        </div>
        <div className={ styles.bottom }>
          <div className={ styles.details }>
            <span> Всего пицц: <b>{totalItems}</b> </span>
            <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
          </div>
          <div className={ styles.buttons }>
            <Link to="/">
              <Button className={ 'buttonGoBack' } outline>
                <Icon src={ greyArowLeftSvg } />

                <span>Вернуться назад</span>
              </Button>
            </Link>
            <Link to={ (location) => `${location.pathname}/delivery` }>
              <Button className={ 'buttonNext' }>
                <span>Далее</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {optionModal.isOpen
      && <ModalConfirm
        closeModal={ optionModal.close }
        confirmOperation={ optionModal.confirm } isOpen={ optionModal.isOpen } title={ optionModal.title }
         />}
    </div>

  );
};

export default Cart;
