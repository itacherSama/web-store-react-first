import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Icon } from '@components';
import cartSvg from '@assets/img/cart.svg';

import styles from './HeaderBtnCart.module.scss';

const HeaderBtnCart = ({ totalPrice, totalItems }) => (
  <div className={ styles.cart }>
    <Link to="/cart">
      <Button className="buttonCart">
        <span>
          {totalPrice}
          {' '}
          ₽
        </span>
        <div className={ styles.cartDelimiter } />
        <Icon src={ cartSvg } />
        <span>{totalItems}</span>
      </Button>
    </Link>
  </div>
);

HeaderBtnCart.propTypes = {
  totalPrice: PropTypes.number,
  totalItems: PropTypes.number,
};

export default HeaderBtnCart;
