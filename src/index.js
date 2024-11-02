import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


import "./scss/component.scss";
import App from "./App";
import './index.css'
//import {BrowserRouter} from "react-router-dom";
const root = createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

  