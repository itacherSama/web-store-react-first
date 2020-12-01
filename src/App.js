import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Home, Cart, NotFound } from './pages';
import { Header, MapYandex } from "./components";

import { getLocalDataCart } from '@redux/cart/actions';

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getLocalDataCart('pizzas'));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/map">
            <MapYandex />
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
