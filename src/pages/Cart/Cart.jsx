import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Button, CartItem, ModalConfirm, CartEmpty, Icon,
} from '@components';
import {
  clearCart, incrementItem, decrementItem, deleteItem,
} from '@redux/cart/actions';
import { useModal } from '@components/Hooks';
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

  const [optionModal, setOptionModal, onCloseModal] = useModal();

  const onIncrementItem = (item) => {
    dispatch(incrementItem(item));
  };

  const onDecrementItem = (item) => {
    dispatch(decrementItem(item));
  };

  const onClearCart = () => {
    dispatch(clearCart());
    onCloseModal();
  };

  const onDeleteItem = (item) => {
    dispatch(deleteItem(item));
    onCloseModal();
  };

  const checkDeleteItem = (item) => {
    setOptionModal({
      isOpen: true,
      title: `Вы действительно хотите удалить элемент ${item.name}`,
      confirm: () => onDeleteItem(item),
      close: onCloseModal,
    });
  };

  const checkClearCart = () => {
    setOptionModal({
      isOpen: true,
      title: 'Вы действительно хотите очистить корзину?',
      confirm: onClearCart,
      close: onCloseModal,
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
          <div className={ styles.cartClear } onClick={ checkClearCart }>
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
        confirmOperation={ optionModal.confirm }
        isOpen={ optionModal.isOpen }
        title={ optionModal.title }
         />}
    </div>

  );
};

export default Cart;
