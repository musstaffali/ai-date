// src/Booking.js
import React, { useState } from 'react';

function Booking({ hotel }) {
  // State variables to track check-in and check-out dates
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Function to handle the reservation
  const handleReservation = () => {
    // In a real application, you would typically send this data to a server to handle the reservation.
    // Here, we're using an alert as a placeholder to show the reservation details.
    alert(`Reserved ${hotel.name} from ${checkIn} to ${checkOut}`);
  };

  return (
    <div className="booking">
      <h2>Book {hotel.name}</h2>

      {/* Input for check-in date */}
      <label>
        Check-in date:
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </label>

      {/* Input for check-out date */}
      <label>
        Check-out date:
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>

      {/* Button to initiate the reservation */}
      <button onClick={handleReservation}>Reserve</button>
    </div>
  );
}

export default Booking
