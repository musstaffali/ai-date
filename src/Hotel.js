// src/Hotel.js
import React from 'react';

// The Hotel component displays information about a hotel
function Hotel({ hotel }) {
  return (
    <div className="hotel">
      {/* Hotel name */}
      <h2>{hotel.name}</h2>
      
      {/* Price per night */}
      <p>Price: ${hotel.price} per night</p>
      
      {/* Number of available rooms */}
      <p>Available Rooms: {hotel.available}</p>
    </div>
  );
}

export default Hotel;
