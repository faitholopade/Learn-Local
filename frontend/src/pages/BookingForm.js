import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/BookingForm.css";
import Modal from "../components/Modal";
function BookingForm() {
  const [bookingData, setBookingData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date: new Date(),
    time: "",
    number_of_people: "",
  });

  const [bookedSlots, setBookedSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/info")
      .then((response) => {
        setBookedSlots(response.data);
      })
      .catch((error) => console.error("Error fetching booked slots:", error));
  }, []);

  const isSlotBooked = (date, time) => {
    return bookedSlots.some(
      (booking) => booking.date === date && booking.time === time
    );
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(bookingData.date);

    if(currentDateDate.getDate() === selectedDate.getDate()) {
      return currentDate.getHours() < time.getHours();
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isSlotBooked(
        bookingData.date.toISOString().split("T")[0],
        bookingData.time
      )
    ) {
      setModalContent("This slot has already been booked. Please choose another slot.");
      setShowModal(true);
      return;
    }
    try {
      // Prepare data for submission (format date, etc.)
      const formattedDate = bookingData.date.toISOString().split("T")[0];
      const submissionData = {
        first_name: bookingData.first_name,
        last_name: bookingData.last_name,
        email: bookingData.email,
        date: formattedDate,
        time: bookingData.time,
        number_of_people: bookingData.number_of_people,
      };

      // Post request to the backend
      const response = await axios.post(
        "http://localhost:5000/book",
        submissionData
      );
      setModalContent("Booking successful!");
      setShowModal(true);
      // Reset form or additional post-submission logic
    } catch (error) {
      if (error.response && error.response.data) {
        setModalContent("Booking failed: " + error.response.data.error);
      } else {
        // Handle other errors like network issues
        setModalContent("Booking failed: An unexpected error occured.");
      }
      setShowModal(true);
    }
  };

  const handleDateChange = (date) => {
    setBookingData({ ...bookingData, date: date });
  };

  const handleChange = (event) => {
    setBookingData({ ...bookingData, [event.target.name]: event.target.value });
  };

  return (
    <div className="booking-container">
      {showModal && <Modal content={modalContent} onClose={() => setShowModal(false)} />}
      <h2>Make a Booking</h2>
      <p>Please fill in the form below to make a booking.</p>
      <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        name="first_name"
        value={bookingData.firstName}
        onChange={handleChange}
        required
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        value={bookingData.lastName}
        onChange={handleChange}
        required
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={bookingData.email}
        onChange={handleChange}
        required
        placeholder="Email"
      />
        <DatePicker
          selected={bookingData.date}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
        />
        <input
          type="time"
          name="time"
          value={bookingData.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="number_of_people"
          value={bookingData.number_of_people}
          min="1"
          max="24"
          onChange={handleChange}
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
