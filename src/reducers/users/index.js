import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from 'actions/users'

const initialState = {
  byId:     {},
  fetching: null,
  fetched:  null,
  error:    null,
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    }

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        byId: action.payload.users,
        fetching: false,
        fetched: true,
        error: null,
      }
    }

    case FETCH_USERS_ERROR: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload.error,
      }
    }

    default: {
      return state
    }
  }
}

export default users

export const getUsers = (state) => Object.values(state.byId)

export const getUsersFetchingStatus = (state) => ({
  fetching: state.fetching,
  fetched: state.fetched,
})
