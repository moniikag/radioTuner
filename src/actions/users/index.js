const byId = (data = []) => {
  return data.reduce((acc, element) => ({ ...acc, [element.id]: element }), {})
}

const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST',
})

const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: { users: byId(users) }
})

const fetchUsersError = (error) => ({
  type: 'FETCH_USERS_ERROR',
  payload: { error }
})

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    return fetch('https://api.github.com/users')
      .then(response => response.json()
      .then(json => ({ response, json })))
      .then(({ response, json }) => {
        if (response.ok) {
          dispatch(fetchUsersSuccess(json))
        } else {
          dispatch(fetchUsersError('error'))
        }
      })
      .catch(error => dispatch(fetchUsersError(error)))
  }
}
