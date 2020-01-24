import React, { useState } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { add } from '../actions/add';

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

const App = ({ smurfs, fetchData, add }) => {
  // console.log(smurfs)

  const handleSubmit = e => {
    e.preventDefault();
    add();
    setName('');
    setAge('');
    setHeight('');
  }
  const nameHandle = e => {
    setName(e.target.value);
  }
  const ageHandle = e => {
    setAge(e.target.value)
  }
  const heightHandle = e => {
    setHeight(e.target.value)
  }
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

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
        <div>Add a new smurf to the village</div>
        <input type='name' id='name' placeholder='Name' value={name} onChange={nameHandle} />
        <input type='age' id='age' placeholder='Age' value={age} onChange={ageHandle} />
        <input type='height' id='height' placeholder='Height(cm)' value={height} onChange={heightHandle} />
        <button type='submit'>Add to the smurfs</button>
      </form>
    </div>
  );
}

export default connect(
  mapStateToProps, { fetchData, add }
)(App);
