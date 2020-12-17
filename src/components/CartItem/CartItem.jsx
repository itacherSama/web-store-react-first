import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from '@components';

import plusSvg from '@assets/img/plus.svg';
import minusSvg from '@assets/img/minus.svg';
import crossSvg from '@assets/img/cross.svg';

import styles from './CartItem.module.scss';

const CartItem = React.memo(({
  itemBlock, onDecrementItem, onIncrementItem, onDeleteItem,
}) => {
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
    <div className={ styles.cartItem }>
      <div className={ styles.blockImg }>
        <img
          alt={ item.name }
          className={ styles.itemImg }
          src={ item.imageUrl }
        />
      </div>
      <div className={ styles.info }>
        <h3>{item.name}</h3>
        <p>{item.type} тесто, {item.size} см.</p>
      </div>
      <div className={ styles.count }>
        <div className={ styles.countMinus }>
          <Button className={ 'buttonCircle' } onClick={ handleDecrementItem } outline>
            <Icon src={ minusSvg } />
          </Button>
        </div>
        <b>{totalItems}</b>
        <div className={ styles.countPlus }>
          <Button className={ 'buttonCircle' } onClick={ handleIncrementItem } outline>
            <Icon src={ plusSvg } />
          </Button>

        </div>
      </div>
      <div className={ styles.price }>
        <b>{totalPrice} ₽</b>
      </div>
      <div className={ styles.remove }>
        <Button className={ 'buttonCircle buttonRemove' } onClick={ handleDeleteItem } outline>
          <Icon src={ crossSvg } />
        </Button>
      </div>
    </div>

  );
});

CartItem.propTypes = {
  itemBlock: PropTypes.object,
  onDecrementItem: PropTypes.func,
  onIncrementItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

export default CartItem;
