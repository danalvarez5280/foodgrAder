import { combineReducers } from 'redux';
import { foodFetch } from './reducers';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';


const rootReducer = combineReducers({
  foodFetch,
  router: routerReducer
});

export default rootReducer;
