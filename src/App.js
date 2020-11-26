import { Route, Switch } from 'react-router-dom';
import React from 'react';

import { Home, Cart, NotFound } from './pages';
import { Header } from "./components";

import styles from './App.module.scss';

function App() {

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

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
