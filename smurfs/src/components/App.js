import React from "react";
import "./App.css";

import { connect } from 'react-redux';
import { fetchData } from '../actions';

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

const App = ({ smurfs, fetchData }) => {
  // console.log(props)
  return (
    <div className="App">
      <h2>Welcome to your state management version of Smurfs!</h2>
      <div>Let's get started by pressing the button below</div>
      <button onClick={fetchData}>Get a smurf</button>
      {smurfs.map(smurf => (
        <div key={smurf.id}>
          {smurf.name && <p>Name: {smurf.name}</p>}
          {smurf.age && <p>Age: {smurf.age}</p>}
          {smurf.height && <p>Height: {smurf.height}</p>}
        </div>
      ))}
    </div>
  );
}

export default connect(
  mapStateToProps, { fetchData }
)(App);
