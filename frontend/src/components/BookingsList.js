// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function BookingsList() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       const result = await axios('http://localhost:5000/info');
//       setBookings(result.data);
//     };
//     fetchBookings();
//   }, []);

//   return (
//     <ul>
//       {bookings.map(booking => (
//         <li key={booking.id}>
//           {booking.date} at {booking.time} for {booking.number_of_people} people
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default BookingsList;
