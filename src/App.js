import React from 'react';
import Bikes from './components/Bikes/Bikes'
import './App.css';
import bikes from './mocks/bikes'

const App = () => (
  <div>
    <div className="header">
      <h1>Bikes</h1>
    </div>
    <div className="container">
      <Bikes bikes={bikes.items}/>
    </div>
  </div>
)

export default App;
