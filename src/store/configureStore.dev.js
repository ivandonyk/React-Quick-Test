import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import history from './history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';


const configureStore = (initialState) => {
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk);

  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware.push(logger);

  const router = routerMiddleware(history);
  middleware.push(router);

  const actionCreators = {
    ...routerActions,
  };


  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators,
    })
    : compose;

  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();

export {
  store,
  history,
};
