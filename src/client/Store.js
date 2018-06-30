import { createStore, applyMiddleware } from 'redux';
import ajaxMiddleware from './middleware/ajaxMiddleware';
import rootReducer from './reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      ajaxMiddleware
    )
  )
}