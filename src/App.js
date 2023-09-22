// src/App.js
import React from 'react';
import './App.css'; // Importing CSS styles
import hotels from './data'; // Importing sample hotel data
import Hotel from './Hotel'; // Importing the Hotel component
import Booking from './Booking'; // Importing the Booking component

// The main App component
function App() {
  return (
    <div className="App">
      {/* Application title */}
      <h1>Hotel Booking App</h1>
      
      {/* Mapping through the list of hotels */}
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          {/* Displaying the Hotel component for each hotel */}
          <Hotel hotel={hotel} />
          
          {/* Displaying the Booking component for each hotel */}
          <Booking hotel={hotel} />
        </div>
      ))}
    </div>
  );
}

export default App;
