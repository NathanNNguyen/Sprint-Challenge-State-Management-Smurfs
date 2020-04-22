import axios from 'axios';

export const fetchData = () => {
  return dispatch => {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res.data)
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data })
      })
      .catch(err => console.log(err))
  }
}

export const submitData = (newSmurf) => dispatch => {
  axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      console.log(res.data)
      dispatch({ type: 'SUBMIT_DATA_SUCCESS', payload: res.data })
    })
    .catch(err => console.log(err))
}