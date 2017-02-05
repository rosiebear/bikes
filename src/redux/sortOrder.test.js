import sortOrder, { setSortBy } from './sortOrder'
import { SET_SORT_BY } from './sortOrder'


describe('SortOrder Redux module', () => {
  describe('reducer', () => {
    it('handles action dispatcher of action type SET_SORT_BY', () => {
      const payload = { sortBy: 'comfort' }
      const action = { type: SET_SORT_BY, ...payload }
      expect(sortOrder('', action)).toEqual('comfort')
    })
  })

  describe('action dispatchers', () => {
    describe('setSortBy', () => {
      it('has the correct action type SET_SORT_BY', () => {
        const action = setSortBy()
        expect(action.type).toEqual(SET_SORT_BY)
      })
    })
  })
})