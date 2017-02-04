import React from 'react';
import { mount } from 'enzyme';
import Bikes from './Bikes';
import mockBikes from '../../mocks/bikes'
const bikes = mockBikes.items

describe('<Bikes />', () => {
  it('renders a `.bike-list`', () => {
    expect(mount(<Bikes bikes={bikes}/>).find('.bike-list').length).toBe(1);
  });

  it('renders seven <Bike /> components ', () => {
    expect(mount(<Bikes bikes={bikes}/>).find('Bike').length).toBe(7);
  });
})
