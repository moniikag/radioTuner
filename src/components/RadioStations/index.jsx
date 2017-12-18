import React, { Component } from 'react'

class RadioStations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stations: ['Top Songs PL', 'Best Hits Ever', 'Classic EU'],
    }
  }

  render() {
    const { stations } = this.state

    return (
      <ul className="radio-stations-list">
        {stations.map(station => <li key={station}>{station}</li>)}
      </ul>
    )
  }
}

export default RadioStations
