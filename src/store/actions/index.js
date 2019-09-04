import {
  CHANGE_SEARCH_FIELD, FETCH_ROBOTS_FAIL,
  FETCH_ROBOTS_START,
  FETCH_ROBOTS_SUCCESS,
} from '../types';

export const setSearch = searchTerm => ({
  type: CHANGE_SEARCH_FIELD,
  payload: searchTerm,
});

export const fetchRobotsStart = () => ({
  type: FETCH_ROBOTS_START,
});

export const fetchRobotsSuccess = robots => ({
  type: FETCH_ROBOTS_SUCCESS,
  payload: robots,
});

export const fetchRobotsFailure = errorMessage => ({
  type: FETCH_ROBOTS_FAIL,
  payload: errorMessage,
});