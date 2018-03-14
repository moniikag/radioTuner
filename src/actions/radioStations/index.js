export const addRadioStation = (station) => ({
  type: 'ADD_STATION',
  payload: { station },
})

export const deleteRadioStation = (id) => ({
  type: 'DELETE_STATION',
  payload: { id },
})
