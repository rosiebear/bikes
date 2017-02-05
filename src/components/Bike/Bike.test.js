import React from 'react';
import { shallow } from 'enzyme';
import Bike from './Bike';
import { mockBikes } from '../../mocks/mockBikes'
const testBike = mockBikes.items[0]

describe('<Bike />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Bike {...testBike} />);
  });

  it('renders the bike', () => {
    expect(wrapper.is('.bike')).toBe(true);
  });

  it('renders the bike\'s image', () => {
    expect(wrapper.find('.bike-image').length).toBe(1)
  })

  it('renders the bike\'s name', () => {
    expect(wrapper.find('.bike-name').text()).toBe(testBike.name)
    expect(wrapper.find('.bike-name').length).toBe(1);
  })

  it('renders the bike\'s description', () => {
    expect(wrapper.find('.bike-description').text()).toBe(testBike.description)
    expect(wrapper.find('.bike-description').length).toBe(1)
  })

  it('renders the bike\'s class', () => {
    expect(wrapper.find('.bike-class').text()).toBe(testBike.class.join(''))
  })
})
