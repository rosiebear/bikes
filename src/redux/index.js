import { combineReducers } from 'redux';
import bikes from './bikes';
import sortOrder from './sortOrder';

const bikesApp = combineReducers({
  bikes,
  sortOrder,
});

export default bikesApp;