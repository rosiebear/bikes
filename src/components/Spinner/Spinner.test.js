import React from 'react'
import { mount } from 'enzyme'
import Spinner from './Spinner'

describe('<Spinner />', () => {
  it('renders a `.spinner`', () => {
    expect(mount(<Spinner />).find('.spinner').length).toBe(1)
  })
})