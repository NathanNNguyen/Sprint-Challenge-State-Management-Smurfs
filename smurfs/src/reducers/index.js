const initialState = {
  smurfs: [
    {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        smurfs: action.payload
      }

    default:
      return state
  }
}