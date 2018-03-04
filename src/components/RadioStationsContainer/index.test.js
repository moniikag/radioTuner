import React from 'react'
import { configure, shallow, mount } from 'enzyme'

import { RadioStations } from './index'
import AddStationButton from './AddStationButton'
import AddStationForm from './AddStationForm'

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })


describe('RadioStations', () => {
  describe('content', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<RadioStations radio/>)
    })

    it('renders as a section', () => {
      expect(wrapper.is('section')).toBe(true)
    })

    it('renders add station button by default', () => {
      expect(wrapper.find(AddStationButton).length).toBe(1)
    })

    it('does not render new station form by default', () => {
      expect(wrapper.find(AddStationForm).length).toBe(0)
    })

    it('renders form instead of button for the relevant state', () => {
      wrapper.setState({ addFormOpen: true })
      expect(wrapper.find(AddStationButton).length).toBe(0)
      expect(wrapper.find(AddStationForm).length).toBe(1)
    })
  })

  describe('behaviour', () => {
    it('updates component state on new station button click', () => {
      const wrapper = mount(<RadioStations/>)
      expect(wrapper.state().addFormOpen).toBe(false)
      const button = wrapper.find(AddStationButton).find('button')
      button.simulate('click')
      expect(wrapper.state().addFormOpen).toBe(true)
    })

    it('calls addRadioStation and passes correct params', () => {
      const props = { addRadioStation: jest.fn() }
      const mockedWrapper = mount(<RadioStations {...props}/>)
      mockedWrapper.setState({ addFormOpen: true })
      const e1 = { target: { value: 'RadioWaw' } }
      const e2 = { target: { value: '99.1' } }
      mockedWrapper.find('form').find('input').at(0).simulate('change', e1)
      mockedWrapper.find('form').find('input').at(1).simulate('change', e2)
      mockedWrapper.find('form').simulate('submit', {})
      console.log(props.addRadioStation.mock.calls)
      expect(props.addRadioStation.mock.calls[0]).toEqual([{
        name: 'RadioWaw',
        frequency: '99.1',
      }])
    })
  })
})
