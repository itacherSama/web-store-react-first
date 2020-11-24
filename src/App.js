import { Route, Switch } from 'react-router-dom';
import React from 'react';

import {Home, Cart, NotFound} from './pages';
import { Header } from "./components";



function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
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
        </div>
    );
}

export default App;
