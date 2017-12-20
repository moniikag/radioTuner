import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'


class SingleStation extends Component {

  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.extendId = this.extendId.bind(this)
    this.addHash = this.addHash.bind(this)
    this.addQueryParam = this.addQueryParam.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillUnmount() {
    console.log('componenWillUnmount')
  }

  componentWillReceiveProps() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  extendId() {
    const currentId = this.props.match.params.id
    const newId = currentId + ':C8'
    this.props.history.replace(`/station/${newId}`)
  }

  addHash() {
    const currentHash = this.props.location.hash || '#'
    const newHash = currentHash + ':C' + this.state.counter
    this.props.history.replace({ hash: newHash, search: this.props.location.search })
  }

  addQueryParam() {
    const currentSearch = this.props.location.search || '?'
    const newSearch = currentSearch + 'C=' + this.state.counter + ','
    this.props.history.replace({ search: newSearch, hash: this.props.location.hash })
  }

  render() {
    console.log(this.props)

    return (
        <article className="main-article">
          <section className="main-section">
            <div style={{ padding: '15px' }}>{this.props.match.params.id}</div>
            <button style={{ padding: '15px' }} onClick={this.extendId}>Extend ID</button>
            <button style={{ padding: '15px' }} onClick={this.addHash}>Add Hash</button>
            <button style={{ padding: '15px' }} onClick={this.addQueryParam}>Add query param</button>
            <Link style={{ padding: '15px' }} to='/'>Home</Link>
            <Link style={{ padding: '15px' }} to={{
              hash: (this.props.location.hash || '#') + ':C' + this.state.counter,
              search: this.props.location.search,
            }}>
              New hash
            </Link>
            <Link style={{ padding: '15px' }} to={{
              hash: this.props.location.hash,
              search: (this.props.location.search || '?') + 'C=' + this.state.counter + ',',
            }}>
              New search
            </Link>
          </section>
        </article>
    )
  }
}

export default SingleStation
