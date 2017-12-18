import React, { Component } from 'react'

import RadioStation from './RadioStation'
import AddStationButton from './AddStationButton'
import AddStationForm from './AddStationForm'

class RadioStations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stations: [
        { name: 'Top Songs PL', frequency: '99.1' },
        { name: 'Best Hits Ever', frequency: '97.5' },
        { name: 'Classic EU', frequency: '109.3' },
      ],
      addFormOpen: false,
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    return this.setState(
      (prevState) => ({ addFormOpen: !prevState.addFormOpen })
    )
  }

  renderButton() {
    return <AddStationButton handleClick={this.toggleForm} />
  }

  renderForm() {
    return <AddStationForm handleClose={this.toggleForm} />
  }

  render() {
    const { addFormOpen, stations } = this.state

    return (
      <ul className="radio-stations-list">
        {stations.map(station =>
          <RadioStation key={station.name} station={station} />
        )}
        {addFormOpen ? this.renderForm() : this.renderButton()}
      </ul>
    )
  }
}

export default RadioStations
