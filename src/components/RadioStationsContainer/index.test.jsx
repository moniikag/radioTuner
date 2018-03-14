import React from 'react'
import { shallow, mount } from 'enzyme'

import { RadioStations } from './index'
import { MemoryRouter } from 'react-router-dom'
import AddStationButton from './AddStationButton'
import AddStationForm from './AddStationForm'


describe('RadioStations', () => {
  describe('content', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<RadioStations/>)
    })

    it('renders as a article', () => {
      expect(wrapper.is('article')).toBe(true)
    })

    it('renders add station button by default', () => {
      expect(wrapper.find(AddStationButton).length).toBe(1)
    })

    it('does not render new station form by default', () => {
      expect(wrapper.find(AddStationForm).length).toBe(0)
    })

    it('renders form instead of button for the relevant state', () => {
      wrapper.setState({ addItemFormOpen: true })
      expect(wrapper.find(AddStationButton).length).toBe(0)
      expect(wrapper.find(AddStationForm).length).toBe(1)
    })
  })

  describe('behaviour', () => {
    const props = { addRadioStation: jest.fn() }
    const wrapper = mount(
      <MemoryRouter>
        <RadioStations {...props}/>
      </MemoryRouter>
    )

    it('updates component state on new station button click', () => {
      expect(wrapper.find(AddStationForm).length).toBe(0)
      const button = wrapper.find(AddStationButton).find('button')
      button.simulate('click')
      expect(wrapper.find(AddStationForm).length).toBe(1)
    })

    it('calls addRadioStation and passes correct params', () => {
      const e1 = { target: { value: 'RadioWaw' } }
      const e2 = { target: { value: '99.1' } }
      wrapper.find('form').find('input').at(0).simulate('change', e1)
      wrapper.find('form').find('input').at(1).simulate('change', e2)
      wrapper.find('form').simulate('submit', {})
      const call = props.addRadioStation.mock.calls[0][0]
      expect(call.name).toEqual('RadioWaw')
      expect(call.frequency).toEqual('99.1')
      expect(call.id).not.toBe(undefined)
      expect(call.id.length).toBe(36)
    })
  })
})
