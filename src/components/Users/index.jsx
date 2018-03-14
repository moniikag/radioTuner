import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../../actions/users'
import { getUsers, getUsersFetchingStatus } from '../../reducers'
import './styles.css'

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    const { users } = this.props
    return users.map(user =>
      <li key={user.login}>
        <span className="label">{user.login}:</span><span>{user.repos_url}</span>
      </li>
    )
  }

  renderConent() {
    return (
      <ul id="users-list">
        {this.renderUsers()}
      </ul>
    )
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  render() {
    const { fetching } = this.props
    return (
      <article className="main-article">
        <section className="main-section">
          {fetching ? this.renderLoading() : this.renderConent()}
        </section>
      </article>
    )
  }
}

const mapStateToProps = (state) => {
  const status = getUsersFetchingStatus(state)
  return {
    users: getUsers(state),
    fetching: status.fetching,
    fetched: status.fetched,
  }
}

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
