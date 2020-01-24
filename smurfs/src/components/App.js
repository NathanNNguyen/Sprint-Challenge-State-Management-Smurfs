import React, { useState } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { fetchData, submitData } from '../actions';

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

const App = ({ smurfs, fetchData, submitData }) => {
  // console.log(smurfs)

  const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    submitData(newSmurf);
    setNewSmurf({ name: '', age: '', height: '' })
    fetchData();
  }

  return (
    <div className="App">
      <h2>Let's get started by pressing the button below</h2>
      <button onClick={fetchData}>Get a smurf</button>
      {smurfs.map(smurf => (
        <div key={smurf.id}>
          {smurf.name && <p>Name: {smurf.name}</p>}
          {smurf.age && <p>Age: {smurf.age}</p>}
          {smurf.height && <p>Height: {smurf.height}</p>}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange} />
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange} />
        <input
          name="height"
          type="text"
          placeholder="Height (cm)"
          onChange={handleChange} />
        <button>Submit Smurf</button>
      </form>
    </div>
  );
}

export default connect(
  mapStateToProps, { fetchData, submitData }
)(App);
