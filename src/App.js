import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';

import Header from '@components/Header';
import Home from '@pages/Home';
import Cart from '@pages/Cart';
import Delivery from '@pages/Delivery';
import NotFound from '@pages/NotFound';
// import MapYandex from '@components/MapYandex';

import { getLocalDataCart } from '@redux/cart/actions';

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getLocalDataCart('pizzas'));
  }, []);

  return (
    <div className={ styles.wrapper }>
      <Header />
      <div className={ styles.content }>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/cart/delivery">
            <Delivery />
          </Route>
          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
