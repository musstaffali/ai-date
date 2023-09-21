// src/Hotel.js
import React from 'react';

function Hotel({ hotel }) {
  return (
    <div className="hotel">
      <h2>{hotel.name}</h2>
      <p>Price: ${hotel.price} per night</p>
      <p>Available Rooms: {hotel.available}</p>
    </div>
  );
}

export default Hotel;
