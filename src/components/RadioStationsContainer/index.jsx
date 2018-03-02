import React, { Component } from 'react'
import { connect } from 'react-redux'

import RadioStation from './RadioStation'
import AddStationButton from './AddStationButton'
import AddStationForm from './AddStationForm'

class RadioStations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      addFormOpen: false,
    }
    this.addStation = this.addStation.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    return this.setState(
      (prevState) => ({ addFormOpen: !prevState.addFormOpen })
    )
  }

  addStation(station) {
    const stations = this.state.stations
    this.setState({ stations: [...stations, station] })
  }

  renderButton() {
    return <AddStationButton handleClick={this.toggleForm} />
  }

  renderForm() {
    return <AddStationForm
        handleClose={this.toggleForm}
        handleSubmit={(station) => this.addStation(station)}
      />
  }

  render() {
    const { addFormOpen } = this.state
    const { stations } = this.props

    return (
      <section className="main-section">
        <ul className="radio-stations-list">
          {stations.map(station =>
            <RadioStation key={station.name} station={station} />
          )}
          {addFormOpen ? this.renderForm() : this.renderButton()}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stations: Object.values(state.stationsById),
  }
}

export default connect(mapStateToProps)(RadioStations)
