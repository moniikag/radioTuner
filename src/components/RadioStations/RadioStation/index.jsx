import React from 'react'
import PropTypes from 'prop-types'

const RadioStation = (props) => {
  const { station } = props

  return (
    <li>{station.name}</li>
  )
}

RadioStation.propTypes = {
  station: PropTypes.object.isRequired,
}

export default RadioStation
