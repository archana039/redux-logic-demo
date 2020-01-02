import React, { Component } from 'react';
import { RenderRoutes } from './router/index';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import Store from './store'
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
        <ToastContainer autoClose={8000} />
      </Provider>
    );
  }
}

export default App;