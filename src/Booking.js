// src/Booking.js
import React, { useState } from 'react';

function Booking({ hotel }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleReservation = () => {
    // Add logic here to handle the reservation
    alert(`Reserved ${hotel.name} from ${checkIn} to ${checkOut}`);
  };

  return (
    <div className="booking">
      <h2>Book {hotel.name}</h2>
      <label>
        Check-in date:
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </label>
      <label>
        Check-out date:
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>
      <button onClick={handleReservation}>Reserve</button>
    </div>
  );
}

export default Booking;
