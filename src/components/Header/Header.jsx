import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import logoSvg from "@assets/img/pizza-logo.svg";
import { textForHeader } from "@shared/addInfo";
import HeaderCartBtn from './HeaderBtnCart';
import styles from './Header.module.scss';

const Header = React.memo(() => {
  const { totalPrice, totalItems } = useSelector(({ cartReducer }) => cartReducer);
  let location = useLocation();
  let [showHeaderCart, setShowHeaderCart] = React.useState(true);

  React.useEffect(() => {
    setShowHeaderCart(location.pathname !== '/cart');
  }, [location]);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>{showHeaderCart && textForHeader[0]}
              {!showHeaderCart && textForHeader[1]}
            </p>
          </div>
        </div>
        {showHeaderCart && <HeaderCartBtn totalPrice={totalPrice} totalItems={totalItems} />}
      </div>
    </div>
  )
}
)
export default Header;