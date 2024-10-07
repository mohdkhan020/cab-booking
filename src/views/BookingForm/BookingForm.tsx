import React, { useState } from 'react'
import './BookingF.css';
const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    carOption: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const { pickupLocation, dropoffLocation, pickupDate, pickupTime, carOption } = formData;

    // Prepare the message
    const message = `Booking Details:
    - Pickup Location: ${pickupLocation}
    - Drop-off Location: ${dropoffLocation}
    - Date: ${pickupDate}
    - Time: ${pickupTime}
    - Car: ${carOption}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL (replace the number with the recipient's phone number)
    const phoneNumber = "8791796433"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect the user to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
<>
<section className="hero position-relative">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1582820795651-f358eebe4406?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="City at night with a taxi"
          className="img-fluid w-100 h-100 object-fit-cover"
        />
      </div>
      <div className="hero-overlay text-white text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className='text-white'>Your reliable taxi service, 24/7</h1>
        <p>Book your taxi in just a few minutes</p>
       

        <form className="booking-form d-flex flex-column align-items-center mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="pickupLocation"
        className="form-control mb-2"
        placeholder="Pickup location"
        value={formData.pickupLocation}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="dropoffLocation"
        className="form-control mb-2"
        placeholder="Drop-off location"
        value={formData.dropoffLocation}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="pickupDate"
        className="form-control mb-2"
        value={formData.pickupDate}
        onChange={handleInputChange}
        required
      />
      <input
        type="time"
        name="pickupTime"
        className="form-control mb-2"
        value={formData.pickupTime}
        onChange={handleInputChange}
        required
      />

      <select
        name="carOption"
        className="form-control mb-2"
        value={formData.carOption}
        onChange={handleInputChange}
        style={{width:'90%'}}
        required
      >
        <option value="" disabled>Select Car</option>
        <option value="Innova">Innova</option>
        <option value="Ertiga">Ertiga</option>
        <option value="Dzire">Dzire</option>
      </select>

      <button type="submit" className="btn btn-primary cta-button">Book Now</button>
    </form>

        <div className="testimonials mt-4">
          <blockquote>"Best taxi ride I've ever had! - Maria S."</blockquote>
        </div>

        <div className="contact-info mt-3">
          <p>Call us: +91-8791796433</p>
        </div>
      </div>
    </section>
</>   
)
}

export default BookingForm;