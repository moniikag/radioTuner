import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RadioStation = ({ station }) => {

  return (

    <Link style={{'textDecoration': 'none', color: 'black'}} to={`/station/${station.name.split(' ').join('_')}`}>
      <li>
        <header>{station.name}</header>
        Frequency:<span className="detail">{station.frequency} FM</span>
      </li>
    </Link>
  )
}

RadioStation.propTypes = {
  station: PropTypes.object.isRequired,
}

export default RadioStation
