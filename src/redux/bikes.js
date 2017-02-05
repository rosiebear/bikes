import { fetchBikes } from '../helpers/api'

export const FETCHING_BIKES = 'FETCHING_BIKES'
export const FETCHING_BIKES_ERROR = 'FETCHING_BIKES_ERROR'
export const FETCHING_BIKES_SUCCESS = 'FETCHING_BIKES_SUCCESS'


export function fetchingBikes () {
  return {
    type: FETCHING_BIKES,
    isFetching: true,
  }
}

export function fetchingBikesError (error) {
  console.warn(error)
  return {
    type: FETCHING_BIKES_ERROR,
    error: 'Error fetching bikes',
    isFetching: false,
  }
}

export function fetchingBikesSuccess (bikes) {
  return {
    type: FETCHING_BIKES_SUCCESS,
    bikes,
    isFetching: false,
    error: '',
  }
}

export function fetchAndHandleBikes () {
  return function (dispatch) {
    dispatch(fetchingBikes())

    fetchBikes()
      .then((bikes) => dispatch(fetchingBikesSuccess(bikes)))
      .catch((error) => dispatch(fetchingBikesError(error)))
  }
}

const initialState = {
  bikes: [],
  isFetching: true,
  error: '',
}

export default function bikes (state = initialState, action) {
  switch (action.type) {
    case FETCHING_BIKES :
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case FETCHING_BIKES_ERROR :
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error,
      }
    case FETCHING_BIKES_SUCCESS :
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error,
        bikes: action.bikes,
      }
    default :
      return state
  }
}