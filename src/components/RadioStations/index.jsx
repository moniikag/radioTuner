import React, { Component } from 'react'

import RadioStation from './RadioStation'

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

  render() {
    const { addFormOpen, stations } = this.state

    return (
      <ul className="radio-stations-list">
        {stations.map(station =>
          <RadioStation key={station.name} station={station} />
        )}
        {!addFormOpen && <li>
          <button
            className="add"
            onClick={this.toggleForm}
          >
            +
          </button>
        </li>}
        {addFormOpen && <li id="form">
          <button
            id="close"
            onClick={this.toggleForm}
          >
            x
          </button>
          <form>
            <input id="name" type="text" placeholder="name" />
            <input type="text" placeholder="frequency" />
          </form>
        </li>}
      </ul>
    )
  }
}

export default RadioStations
