import React from 'react';
import {Link} from "react-router-dom";

import emptyCartImg from '../assets/img/empty-cart.png';

const CartEmpty = React.memo(() => {
    return (
        <div className="content">
            <div className="container">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src={emptyCartImg} alt="Empty cart"/>
                    <button className="button button--black">
                        <Link to={'/'}>
                            <span>Вернуться назад</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
});

export default CartEmpty;