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
    }
  }

  render() {
    const { stations } = this.state

    return (
      <ul className="radio-stations-list">
        {stations.map(station =>
          <RadioStation key={station.name} station={station} />
        )}
        <li>
          <button className="add"> + </button>
        </li>
        <li>
          <form>
            <input id="name" type="text" placeholder="name" />
            <input type="text" placeholder="frequency" />
          </form>
        </li>
      </ul>
    )
  }
}

export default RadioStations
