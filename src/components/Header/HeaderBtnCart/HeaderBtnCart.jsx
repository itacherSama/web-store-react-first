import React from 'react'

import { Link } from "react-router-dom";
import { Button } from '@components';
import { IconCart } from '@components/Icons';

import styles from './HeaderBtnCart.module.scss';

const HeaderBtnCart = ({ totalPrice, totalItems }) => {
  return (
    <div className={styles.cart}>
      <Link to='/cart'>
        <Button className={'buttonCart'}>
          <span>{totalPrice} ₽</span>
          <div className={styles.cartDelimiter}></div>
          <IconCart fill="none" />
          <span>{totalItems}</span>
        </Button>
      </Link>
    </div>
  )
}

export default HeaderBtnCart;
