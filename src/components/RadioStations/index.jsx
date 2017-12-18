import React, { Component } from 'react'

import RadioStation from './RadioStation'

class RadioStations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stations: [
        { name: 'Top Songs PL' },
        { name: 'Best Hits Ever' },
        { name: 'Classic EU' },
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
      </ul>
    )
  }
}

export default RadioStations
