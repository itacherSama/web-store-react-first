import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@components';
import { IconRemove, IconMinus, IconPlus } from '@components/Icons';

import styles from './CartItem.module.scss';

const CartItem = React.memo(({ itemBlock, onDecrementItem, onIncrementItem, onDeleteItem }) => {
  const { item, totalItems, totalPrice } = itemBlock;

  const handleIncrementItem = () => {
    onIncrementItem(item);
  };

  const handleDecrementItem = () => {
    onDecrementItem(item);
  };

  const handleDeleteItem = () => {
    onDeleteItem(item);
  };

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
            <IconMinus />
          </Button>
        </div>
        <b>{totalItems}</b>
        <div className={styles.countPlus}>
          <Button outline className={'buttonCircle'} onClick={handleIncrementItem}>
            <IconPlus />
          </Button>

        </div>
      </div>
      <div className={styles.price}>
        <b>{totalPrice} ₽</b>
      </div>
      <div className={styles.remove}>
        <Button outline className={'buttonCircle buttonRemove'} onClick={handleDeleteItem}>
          <IconRemove />
        </Button>
      </div>
    </div>

  );
})

CartItem.propTypes = {
  itemBlock: PropTypes.object,
  onDecrementItem: PropTypes.func,
  onIncrementItem: PropTypes.func,
  onDeleteItem: PropTypes.func
};

CartItem.displayName = 'CartItem';

export default CartItem;
