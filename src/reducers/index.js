import { combineReducers } from 'redux';
import { foodFetch, setLocation, userSearch, signIn, signOut, addFaves } from './reducers';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  foodFetch,
  setLocation,
  userSearch,
  signIn,
  signOut,
  addFaves,
  router: routerReducer
});

export default rootReducer;
