import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../../actions/users'
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

  render() {
    return (
      <article className="main-article">
        <section className="main-section">
          <ul id="users-list">
            {this.renderUsers()}
          </ul>
        </section>
      </article>
    )
  }
}

const mapStateToProps = (state) => ({
  users: Object.values(state.users.byId)
})

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
