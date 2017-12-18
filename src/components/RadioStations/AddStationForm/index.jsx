import React from 'react'
import PropTypes from 'prop-types'

const AddStationForm = ({ handleClose }) => {

  return (
    <li id="form">
      <button
        id="close"
        onClick={handleClose}
      >
        x
      </button>
      <form>
        <input id="name" type="text" placeholder="name" />
        <input type="text" placeholder="frequency" />
      </form>
    </li>
  )
}

AddStationForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default AddStationForm
