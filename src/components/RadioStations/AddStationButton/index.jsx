import React from 'react'
import PropTypes from 'prop-types'

const AddStationButton = ({ handleClick }) => {

  return (
    <li>
      <button
        className="add"
        onClick={handleClick}
      >
        +
      </button>
    </li>
  )
}

AddStationButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default AddStationButton
