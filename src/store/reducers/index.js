import {
  CHANGE_SEARCH_FIELD, FETCH_ROBOTS_FAIL,
  FETCH_ROBOTS_START,
  FETCH_ROBOTS_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  searchTerm: '',
  robots: [],
  isFetching: false,
  errorMessage: '',
};

export const setSearchReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchTerm: payload,
      };
    case FETCH_ROBOTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        robots: payload,
      };
    case FETCH_ROBOTS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};