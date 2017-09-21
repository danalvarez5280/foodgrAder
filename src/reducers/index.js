import { combineReducers } from 'redux';
import { foodFetch, setLocation, userSearch } from './reducers';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  foodFetch,
  setLocation,
  userSearch,
  router: routerReducer
});

export default rootReducer;
