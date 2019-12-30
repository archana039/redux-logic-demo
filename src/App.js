import React, { Component } from 'react';
import { RenderRoutes } from './router/index';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <RenderRoutes />
          <ToastContainer autoClose={8000} />
      </BrowserRouter>
    );
  }
}

export default App;