import axios from 'axios';

export const fetchData = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://localhost:3333/smurfs`)
      // .then(res => {
      // console.log(res)
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data })
      // } )
    }
    catch (err) {
      console.log(err)
    }
  }
}