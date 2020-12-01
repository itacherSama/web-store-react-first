import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '@components';
import { IconCart } from '@components/Icons';

import styles from './HeaderBtnCart.module.scss';

const HeaderBtnCart = ({ totalPrice, totalItems }) => (
  <div className={styles.cart}>
    <Link to="/cart">
      <Button className="buttonCart">
        <span>
          {totalPrice}
          {' '}
          ₽
        </span>
        <div className={styles.cartDelimiter} />
        <IconCart fill="none" />
        <span>{totalItems}</span>
      </Button>
    </Link>
  </div>
);

HeaderBtnCart.propTypes = {
  totalPrice: PropTypes.Number,
  totalItems: PropTypes.Number,
};

export default HeaderBtnCart;
