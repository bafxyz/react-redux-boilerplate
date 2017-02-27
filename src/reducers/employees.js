import {employees as employeesState} from '../store.json'
import filter from 'lodash/filter'
import includes from 'lodash/includes'

export default function employees(state = [...employeesState], action) {
  if (action.type === 'SEARCH_EMPLOYEE') {
    return filter([...state], ({firstName, lastName}) => {
      if (includes(firstName, action.payload) || includes(lastName, action.payload)) {
        return true;
      }
    });
  }

  if (action.type === 'CREATE_EMPLOYEE') {
    return [...state, action.payload];
  }

  if (action.type === 'DELETE_EMPLOYEE') {
    return [...state, action.payload];
  }

  return state;
}
