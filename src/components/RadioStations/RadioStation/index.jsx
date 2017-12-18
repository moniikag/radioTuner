import React from 'react'
import PropTypes from 'prop-types'

const RadioStation = ({ station }) => {

  return (
    <li>{station.name}</li>
  )
}

RadioStation.propTypes = {
  station: PropTypes.object.isRequired,
}

export default RadioStation
