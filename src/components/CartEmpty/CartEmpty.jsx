import React from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames';

import {Button} from './../index';
import styles from '../../pages/Cart/Cart.module.scss';

import emptyCartImg from '../../assets/img/empty-cart.png';

const CartEmpty = React.memo(() => {
    return (
        <div className="content">
            <div className="container">
                <div className={cn(styles.cart, styles.cartEmpty)}>
                    <h2>Корзина пустая <i>😕</i></h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src={emptyCartImg} alt="Empty cart"/>
                    <Button className={'buttonBlack'}>
                        <Link to={'/'}>
                            <span>Вернуться назад</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
});

export default CartEmpty;