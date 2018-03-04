import { combineReducers } from 'redux'

import radioStations, * as fromRadioStations from './radioStations'
import users from './users'

const reducer = combineReducers({
  radioStations,
  users,
})

export const getRadioStations = (state) =>
  fromRadioStations.getRadioStations(state.radioStations)

export default reducer
