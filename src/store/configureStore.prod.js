import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import history from './history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();

export {
  store,
  history,
};
