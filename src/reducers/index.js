import { combineReducers } from 'redux'

import radioStations, * as fromRadioStations from './radioStations'
import users, * as fromUsers from './users'

const reducer = combineReducers({
  radioStations,
  users,
})

export const getRadioStations = (state) =>
  fromRadioStations.getRadioStations(state.radioStations)

export const getRadioStation = (state, stationId) =>
  fromRadioStations.getRadioStation(state.radioStations, stationId)

export const getUsers = (state) =>
  fromUsers.getUsers(state.users)

export default reducer
