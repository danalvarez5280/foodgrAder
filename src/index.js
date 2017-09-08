import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import App from './App';
import './index.css';


const middleware = routerMiddleware(history);
const history = createHistory();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk, middleware));
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// <ConnectedRouter history={history}>
// </ConnectedRouter>

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
