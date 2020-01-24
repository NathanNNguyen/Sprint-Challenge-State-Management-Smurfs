import axios from 'axios';

export const fetchData = () => {
  return dispatch => {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res)
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data })
      })
      .catch(err => console.log(err))
  }
}