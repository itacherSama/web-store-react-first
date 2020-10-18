import { Route } from 'react-router-dom';
import React from 'react';

import {Home, Cart} from './pages';
import { Header } from "./components";



function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
        </div>
    );
}

export default App;
