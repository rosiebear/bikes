import React from 'react'
import { mount } from 'enzyme'
import Loading from './Loading'

describe('<Loading />', () => {
  it('renders a `.loading-container`', () => {
    expect(mount(<Loading />).find('.loading-container').length).toBe(1)
  })

  it('renders seven <Spinner /> components ', () => {
    expect(mount(<Loading />).find('Spinner').length).toBe(1)
  })
})
