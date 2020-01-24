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
      };

    case 'ADD_SMURF':
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload,
            age: action.payload,
            height: action.payload,
            id: Date.now()
          }
        ]
      }

    default:
      return state
  }
}