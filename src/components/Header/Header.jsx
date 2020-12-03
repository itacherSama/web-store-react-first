import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Icon from '@components/Icon';
import { textForHeader } from '@shared/addInfo';
import logoSvg from '@assets/img/pizza-logo.svg';

import HeaderCartBtn from './HeaderBtnCart';
import styles from './Header.module.scss';

const Header = React.memo(() => {
  const { totalPrice, totalItems } = useSelector(({ cartReducer }) => cartReducer);
  const location = useLocation();
  const [showHeaderCart, setShowHeaderCart] = React.useState(true);

  React.useEffect(() => {
    setShowHeaderCart(location.pathname !== '/cart');
  }, [location]);

  return (
    <div className={ styles.header }>
      <div className={ styles.container }>
        <div className={ styles.logo }>
          {<Icon src={ logoSvg } />}
          <div>
            <h1>React Pizza</h1>
            <p>
              {showHeaderCart && textForHeader[0]}
              {!showHeaderCart && textForHeader[1]}
            </p>
          </div>
        </div>
        {showHeaderCart && <HeaderCartBtn totalItems={ totalItems } totalPrice={ totalPrice } />}
      </div>
    </div>
  );
});
export default Header;
