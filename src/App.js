// src/App.js
import React from 'react';
import './App.css';
import hotels from './data';
import Hotel from './Hotel';
import Booking from './Booking';

function App() {
  return (
    <div className="App">
      <h1>Hotel Booking App</h1>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <Hotel hotel={hotel} />
          <Booking hotel={hotel} />
        </div>
      ))}
    </div>
  );
}

export default App;
