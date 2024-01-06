// import React, { useState } from 'react';
// import axios from 'axios';

// function BookingForm() {
//   const [bookingData, setBookingData] = useState({
//     date: '',
//     time: '',
//     number_of_people: ''
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/book', bookingData);
//       alert('Booking successful!');
//     } catch (error) {
//       alert('Booking failed: ' + error.response.data.error);
//     }
//   };

//   const handleChange = (event) => {
//     setBookingData({ ...bookingData, [event.target.name]: event.target.value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="date" name="date" value={bookingData.date} onChange={handleChange} required />
//       <input type="time" name="time" value={bookingData.time} onChange={handleChange} required />
//       <input type="number" name="number_of_people" value={bookingData.number_of_people} min="1" max="24" onChange={handleChange} required />
//       <button type="submit">Book</button>
//     </form>
//   );
// }

// export default BookingForm;
