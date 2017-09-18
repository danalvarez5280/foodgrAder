import { combineReducers } from 'redux';
import { foodFetch1, setLocation, userSearch, setLink} from './reducers';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  foodFetch1,
  setLocation,
  userSearch,
  setLink,
  router: routerReducer
});

export default rootReducer;
