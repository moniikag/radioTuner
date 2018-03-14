const initialState = {
  byId: {},
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USERS_SUCCESS': {
      return {
        ...state,
        byId: action.payload.users,
      }
    }

    default: {
      return state
    }
  }
}

export default users
