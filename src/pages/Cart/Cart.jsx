import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Button, CartItem } from '@components';
import { clearCart, incrementItem, decrementItem, deleteItem } from "@redux/cart/actions";
import IconCart from '@components/Icons/IconCart';
import { createItemsForCartSelector } from '@redux/selectors';
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round"
                strokeLinejoin="round" />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>

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
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>

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