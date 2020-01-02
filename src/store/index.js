import { applyMiddleware, createStore, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import logger from "redux-logger";
import { AllLogics } from '../logic'
import combineReducers from '../reducer'
const logicMiddleware = createLogicMiddleware(AllLogics);

const middleware = applyMiddleware(
  logicMiddleware,logger
);
const Store = createStore(combineReducers, middleware)
export default Store