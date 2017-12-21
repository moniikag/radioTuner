import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RadioStation = ({ station }) => {

  return (
    <li>
      <Link
        className="station-link"
        to={`/station/${station.name.split(' ').join('_')}`}
      >
        <header>{station.name}</header>
      </Link>
      Frequency:<span className="detail">{station.frequency} FM</span>
    </li>
  )
}

RadioStation.propTypes = {
  station: PropTypes.object.isRequired,
}

export default RadioStation
