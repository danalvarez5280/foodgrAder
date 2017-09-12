import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import App from './App';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const history = createHistory()
const middleware = routerMiddleware(history);
const store = createStore(rootReducer, devTools, applyMiddleware(thunk, middleware))


const router = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(router , document.getElementById('root'));

registerServiceWorker();
