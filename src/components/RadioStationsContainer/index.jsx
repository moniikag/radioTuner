import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AddStationButton from './AddStationButton'
import AddStationForm from './AddStationForm'
import RadioStation from './RadioStation'
import SingleStation from '../SingleStation'
import { addRadioStation, deleteRadioStation } from '../../actions/radioStations'
import { getRadioStations } from '../../reducers'
import './styles.css'

class RadioStations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addItemFormOpen: false,
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.addStation = this.addStation.bind(this)
  }

  toggleForm() {
    this.setState(
      (prevState) => ({ addItemFormOpen: !prevState.addItemFormOpen })
    )
  }

  addStation(station) {
    this.props.addRadioStation(station)
  }

  renderRadioStations() {
    const { deleteRadioStation, stations } = this.props
    return stations.map(station =>
      <RadioStation
        handleDelete={deleteRadioStation}
        key={station.name}
        station={station}
      />
    )
  }

  renderButton() {
    return (
      <AddStationButton
        handleClick={this.toggleForm}
      />
    )
  }

  renderForm() {
    return (
      <AddStationForm
        handleClose={this.toggleForm}
        handleSubmit={this.addStation}
      />
    )
  }

  render() {
    const { addItemFormOpen } = this.state
    return (
      <article className="main-article">
        <section className="main-section">
          <ul className="radio-stations-list">
            {this.renderRadioStations()}
            {addItemFormOpen ? this.renderForm() : this.renderButton()}
          </ul>
        </section>
        <Route path='/stations/:stationId' component={SingleStation}/>
      </article>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stations: getRadioStations(state),
  }
}

const mapDispatchToProps = {
  addRadioStation,
  deleteRadioStation,
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioStations)
