import {combineReducers} from 'redux';
import employees from './employees';

const allReducers = combineReducers({
  employees
});

export default allReducers;
