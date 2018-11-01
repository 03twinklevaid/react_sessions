import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './config/store';
import App from './App';
import Header from './components/header';
import Cart from './components/cart'
import {BrowserRouter as Router, Route} from 'react-router-dom';

const app = <Provider store={store}>
    <div>
        <Router>
            <div>
                <Route exact path="/" component={ App } />
                <Route path="/cart" component={ Cart } />
            </div>
        </Router>
    </div>
 </Provider>

ReactDOM.render(app, document.getElementById('root'));
