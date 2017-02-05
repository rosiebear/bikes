import { mockBikes } from '../mocks/mockBikes'
import { sortBikesByClass } from './sorter'
const sorter  = ["comfort", "endurance", "race"]

describe('sortBikesByClass', () => {
  it('sorts bikes by "comfort" class', () => {
    const sortedBikes = sortBikesByClass(mockBikes.items, sorter[0])
    expect(sortedBikes[0].class.indexOf(sorter[0])).not.toBe(-1)
  })

  it('sorts bikes by "endurance" class', () => {
    const sortedBikes = sortBikesByClass(mockBikes.items, sorter[1])
    expect(sortedBikes[0].class.indexOf(sorter[1])).not.toBe(-1)
  })

  it('sorts bikes by "race" class', () => {
    const sortedBikes = sortBikesByClass(mockBikes.items, sorter[1])
    expect(sortedBikes[0].class.indexOf(sorter[1])).not.toBe(-1)
  })
})