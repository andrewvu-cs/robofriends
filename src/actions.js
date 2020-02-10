import {CHANGE_SEARCH_FIELD} from './constants';

// payload sending whatever data is needed
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text  
})