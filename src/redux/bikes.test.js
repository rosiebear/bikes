import bikes, { fetchingBikes, fetchingBikesError, fetchingBikesSuccess } from './bikes'
import { FETCHING_BIKES, FETCHING_BIKES_ERROR, FETCHING_BIKES_SUCCESS } from './bikes'
import { mockBikes } from '../mocks/mockBikes'

const initialState = {
  bikes: [],
  isFetching: true,
  error: '',
}

describe('Bikes Redux module', () => {
  describe('reducer', () => {
    it('handles action with unknown type', () => {
      expect(bikes(undefined, {})).toEqual(initialState)
    })

    it('handles action dispatcher of action type FETCHING_BIKES', () => {
      const payload = { isFetching: true }
      const action = { type: FETCHING_BIKES, ...payload }
      expect(bikes({}, action)).toEqual(payload)
    })

    it('handles action dispatcher of action type FETCHING_BIKES_ERROR', () => {
      const payload = { error: 'Error fetching bikes', isFetching: false }
      const action = { type: FETCHING_BIKES_ERROR, ...payload }
      expect(bikes({}, action)).toEqual({...payload})
    })

    it('handles action dispatcher of action type FETCHING_BIKES_SUCCESS', () => {
      const payload = { bikes: mockBikes.items, isFetching: false, error: '' }
      const action = { type: FETCHING_BIKES_SUCCESS, ...payload }
      expect(bikes({}, action)).toEqual({...payload})
    })
  })

  describe('action dispatchers', () => {

    describe('fetchingBikes', () => {
      it('has the correct action type FETCHING_BIKES', () => {
        const action = fetchingBikes()
        expect(action.type).toEqual(FETCHING_BIKES)
      })
    })

    describe('fetchingBikesError', () => {
      it('has the correct action type FETCHING_BIKES_ERROR', () => {
        const action = fetchingBikesError()
        expect(action.type).toEqual(FETCHING_BIKES_ERROR)
      })

      it('has the correct payload', () => {
        const action = fetchingBikesError()
        expect(action.error).toEqual('Error fetching bikes')
      })
    })

    describe('fetchingBikesSuccess', () => {
      it('has the correct action type FETCHING_BIKES_SUCCESS', () => {
        const action = fetchingBikesSuccess()
        expect(action.type).toEqual(FETCHING_BIKES_SUCCESS)
      })

      it('has the correct payload', () => {
        const action = fetchingBikesSuccess(mockBikes)
        expect(action.bikes).toEqual(mockBikes)
      })
    })
  })
})