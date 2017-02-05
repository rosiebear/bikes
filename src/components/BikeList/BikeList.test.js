import React from 'react'
import { mount } from 'enzyme'
import BikeList from './BikeList'
import { mockBikes } from '../../mocks/mockBikes'
const bikes = mockBikes.items

describe('<BikeList />', () => {
  it('renders a `.bike-list`', () => {
    expect(mount(<BikeList bikes={bikes}/>).find('.bike-list').length).toBe(1)
  })

  it('renders seven <Bike /> components ', () => {
    expect(mount(<BikeList bikes={bikes}/>).find('Bike').length).toBe(7)
  })
})
