import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import restaurantsApi from '../restaurants-api';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(restaurantsApi)),
    devToolsEnhancer()
  )
);

export default store;
