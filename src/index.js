<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

<<<<<<< HEAD
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
=======

>>>>>>> 38cb01f339578bfa9e20d84845a23831d83b1785
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
=======
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </Provider>,
  document.getElementById('root')
>>>>>>> ccf1b9c86b039db7256a5d89e55297056a33e6f8
>>>>>>> 38cb01f339578bfa9e20d84845a23831d83b1785
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
