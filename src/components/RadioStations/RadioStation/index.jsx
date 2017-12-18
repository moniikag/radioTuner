import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioStation extends Component {

  render() {
    const { station } = this.props

    return (
      <li>{station.name}</li>
    )
  }
}

RadioStation.propTypes = {
  station: PropTypes.object.isRequired,
}

export default RadioStation
