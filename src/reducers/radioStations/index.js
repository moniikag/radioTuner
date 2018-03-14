const initialState = {
  stationsById: {
    '99.1':  { id: '99.1', name: 'Top Songs PL', frequency: '99.1' },
    '97.5':  { id: '97.5', name: 'Best Hits Ever', frequency: '97.5' },
    '109.3': { id: '109.3', name: 'Classic EU', frequency: '109.3' },
  },
}

const radioStations = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_STATION': {
      const { station } = action.payload
      return {
        ...state,
        stationsById: {
          ...state.stationsById,
          [station.id]: station
        }
      }
    }

    case 'DELETE_STATION': {
      const { id } = action.payload
      const { [id]: deleted, ...other } = state.stationsById
      return {
        ...state,
        stationsById: other,
      }
    }

    default: {
      return state
    }
  }
}

export default radioStations

export const getRadioStations = (state) => Object.values(state.stationsById)
export const getRadioStation = (state, stationId) => state.stationsById[stationId] || {}
