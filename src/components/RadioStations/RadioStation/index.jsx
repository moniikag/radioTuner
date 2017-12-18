import React from 'react'
import PropTypes from 'prop-types'

const RadioStation = ({ station }) => {

  return (
    <li>
      <header>{station.name}</header>
      Frequency:<span className="detail">{station.frequency} FM</span>
    </li>
  )
}

RadioStation.propTypes = {
  station: PropTypes.object.isRequired,
}

export default RadioStation
