import { combineReducers } from 'redux';
import { foodFetch1, setLocation } from './reducers';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  foodFetch1,
  setLocation,
  router: routerReducer
});

export default rootReducer;
