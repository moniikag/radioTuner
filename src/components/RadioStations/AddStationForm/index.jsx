import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddStationForm extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(value, field) {
    const newStation = { ...this.state.newStation, [field]: value }
    this.setState({ newStation })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { newStation } = this.state
    if(newStation) { this.props.handleSubmit(newStation) }
    this.props.handleClose()
  }

  render() {
    return (
      <li id="form">
        <button
          id="close"
          onClick={this.props.handleClose}
        >
          x
        </button>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            id="name"
            onChange={(e) => this.handleChange(e.target.value, 'name')}
            type="text"
            placeholder="name"
          />
          <input
            onChange={(e) => this.handleChange(e.target.value, 'frequency')}
            type="text"
            placeholder="frequency"
          />
          <button style={{display: 'none'}} type="submit"></button>
        </form>
      </li>
    )
  }
}

AddStationForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default AddStationForm
