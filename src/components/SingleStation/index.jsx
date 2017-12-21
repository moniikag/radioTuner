import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SingleStation extends Component {

  render() {
    return (
      <section className="main-section">
        <div style={{ padding: '15px' }}>{this.props.match.params.id}</div>
        <div style={{ padding: '15px' }}>Some more details</div>
        <Link style={{ padding: '15px' }} to='/'>Home</Link>
      </section>
    )
  }
}

export default SingleStation
