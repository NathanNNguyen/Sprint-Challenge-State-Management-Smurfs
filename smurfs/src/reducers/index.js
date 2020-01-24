const initialState = {
  smurfs: [
    
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        smurfs: action.payload
      };

    case 'SUBMIT_DATA_SUCCESS':
      return {
        ...state,
        smurfs: [
          ...state.smurfs, action.payload
        ]
      }

    default:
      return state
  }
}