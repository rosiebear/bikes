export const SET_SORT_BY = 'SET_SORT_BY'

export function setSortBy (sortBy) {
  return {
    type: SET_SORT_BY,
    sortBy
  }
}

export default function sortOrder (state = '', action) {
  switch (action.type) {
    case SET_SORT_BY :
      return action.sortBy
    default :
      return state
  }
}