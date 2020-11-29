import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Button, CartItem } from '@components';
import { clearCart, incrementItem, decrementItem, deleteItem } from "@redux/cart/actions";
import IconCart from '@components/Icons/IconCart';
import IconTrash from '@components/Icons/IconTrash';
import IconArrowLeft from '@components/Icons/IconArrowLeft';

import { createItemsForCartSelector } from '@redux/cart/selectors';
import CartEmpty from './CartEmpty';

import styles from './Cart.module.scss';


const Cart = (props) => {

  const dispatch = useDispatch();
  const { totalItems, totalPrice } = useSelector(({ cartReducer }) => cartReducer);
  const arrayItems = useSelector((state =>
    createItemsForCartSelector(state, 'item')
  ));

  const onIncrementItem = (item) => {
    dispatch(incrementItem(item));
  }

  const onDecrementItem = (item) => {
    dispatch(decrementItem(item));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const onDeleteItem = (item) => {
    dispatch(deleteItem(item));
  }

  if (!arrayItems.length) {
    return <CartEmpty />
  }

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <div className={styles.top}>
          <h2 className={styles.title}>
            <IconCart width={30} height={30} fill={'white'} strokeWidth={'1.5'} />
                            Корзина
                        </h2>
          <div className={styles.cartClear} onClick={handleClearCart}>
            <IconTrash />

            <span>Очистить корзину</span>
          </div>
        </div>
        <div className={styles.items}>
          {
            arrayItems && arrayItems.map((itemBlock, idx) => (
              <CartItem
                itemBlock={itemBlock}
                key={`${idx}_${itemBlock}`}
                onIncrementItem={onIncrementItem}
                onDecrementItem={onDecrementItem}
                onDeleteItem={onDeleteItem}
              />
            ))
          }
        </div>
        <div className={styles.bottom}>
          <div className={styles.details}>
            <span> Всего пицц: <b>{totalItems}</b> </span>
            <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
          </div>
          <div className={styles.buttons}>
            <Link to="/">
              <Button outline className={'buttonGoBack'}>
                <IconArrowLeft />

                <span>Вернуться назад</span>
              </Button>
            </Link>
            <Button className={'buttonPay'}>
              <span>Оплатить сейчас</span>
            </Button>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Cart;