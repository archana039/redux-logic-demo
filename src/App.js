import React, { Component } from 'react';
import { RenderRoutes } from './router/index';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import Store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <RenderRoutes />
          <ToastContainer autoClose={8000} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;