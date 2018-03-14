import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getRadioStation } from '../../reducers'

class SingleStation extends Component {

  render() {
    const { station } = this.props

    return (
      <section className="main-section">
        <div style={{ padding: '15px'}}>
          {station.name}
        </div>
        <div style={{ padding: '15px'}}>
          {station.frequency}
        </div>
        <Link
          style={{ padding: '15px'}}
          to='/'
        >
          Home
        </Link>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  station: getRadioStation(state, ownProps.match.params.stationId)
})

export default connect(mapStateToProps)(SingleStation)
