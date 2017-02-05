import React from 'react';
import BikeListContainer from './containers/BikeListContainer/BikeListContainer'
import './App.css';

const App = () => (
  <div>
    <div className="header">
      <h1>{'Bikes'}</h1>
    </div>
    <div className="container">
      <BikeListContainer />
    </div>
  </div>
)

export default App;
