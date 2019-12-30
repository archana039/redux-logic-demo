import { applyMiddleware, createStore, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic'
export default createStore(rootReducer, composedMiddleware)