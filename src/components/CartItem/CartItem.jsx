import React from "react";
import cn from 'classnames';
import PropTypes from "prop-types";

import { Button } from '@components';

import styles from './CartItem.module.scss';

const CartItem = React.memo(({ itemBlock, onDecrementItem, onIncrementItem, onDeleteItem }) => {
  const { item, totalItems, totalPrice } = itemBlock;

  const handleIncrementItem = () => {
    onIncrementItem(item);
  }

  const handleDecrementItem = () => {
    onDecrementItem(item);
  }

  const handleDeleteItem = () => {
    onDeleteItem(item);
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.blockImg}>
        <img
          className={styles.itemImg}
          src={item.imageUrl}
          alt={item.name}
        />
      </div>
      <div className={styles.info}>
        <h3>{item.name}</h3>
        <p>{item.type} тесто, {item.size} см.</p>
      </div>
      <div className={styles.count}>
        <div className={styles.countMinus}>
          <Button outline className={'buttonCircle'} onClick={handleDecrementItem}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">

              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E" />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E" />
            </svg>

          </Button>
        </div>
        <b>{totalItems}</b>
        <div className={styles.countPlus}>
          <Button outline className={'buttonCircle'} onClick={handleIncrementItem}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#EB5A1E" />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#EB5A1E" />
            </svg>

          </Button>

        </div>
      </div>
      <div className={styles.price}>
        <b>{totalPrice} ₽</b>
      </div>
      <div className={styles.remove}>
        <Button outline className={'buttonCircle buttonRemove'} onClick={handleDeleteItem}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E" />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E" />
          </svg>

        </Button>
      </div>
    </div>

  )
}
)

CartItem.propTypes = {
  itemBlock: PropTypes.object,
  onDecrementItem: PropTypes.func,
  onIncrementItem: PropTypes.func,
  onDeleteItem: PropTypes.func
};

export default CartItem;
