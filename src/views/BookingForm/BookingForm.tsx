import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    tripType: "",
    pickupDate: "",
    carOption: "",
    contactNumber: "",
  });

  // Update formData with values from navigation state
  useEffect(() => {
    if (location.state) {
      const { pickupLocation, dropoffLocation } = location.state;
      setFormData((prevData) => ({
        ...prevData,
        pickupLocation: pickupLocation || "",
        dropoffLocation: dropoffLocation || "",
      }));
    }
  }, [location.state]);
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const {
      pickupLocation,
      dropoffLocation,
      tripType,
      pickupDate,
      carOption,
      contactNumber,
    } = formData;
    console.log("formData = ", formData);
    // Prepare the message
    const message = `Booking Details:
    - Pickup Location: ${pickupLocation}
    - Drop-off Location: ${dropoffLocation}
    - Trip:${tripType}
    - Date: ${pickupDate}
    - Car: ${carOption}
    - Mobile: ${contactNumber}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL (replace the number with the recipient's phone number)
    const phoneNumber = "+918791796433"; // Replace with your WhatsApp number
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
          <h1 className="contactMargin text-white">
            Your reliable Bareilly taxi service, 24/7
          </h1>
          <p>Book your taxi in just a few minutes</p>

          <form
            className="booking-form d-flex flex-column align-items-center mt-4"
            onSubmit={handleSubmit}
          >
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
            <select
              name="tripType"
              className="form-control mb-2"
              value={formData.tripType}
              onChange={handleInputChange}
              style={{ width: "90%" }}
              required
            >
              <option value="" disabled>
                Select Trip Type
              </option>
              <option value="oneWay">One Way Trip</option>
              <option value="roundTrip">Round Trip</option>
              <option value="tourPackage">Tour Package</option>
            </select>

            <input
              type="date"
              name="pickupDate"
              placeholder="PickUp-Date"
              className="form-control mb-2"
              value={formData.pickupDate}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split("T")[0]} // Sets today's date as the minimum
            />

            <select
              name="carOption"
              className="form-control mb-2"
              value={formData.carOption}
              onChange={handleInputChange}
              style={{ width: "90%" }}
              required
            >
              <option value="" disabled>
                Select Car
              </option>
              <option value="Innova">Innova Crysta</option>
              <option value="Ertiga">Sedan Cab</option>
              <option value="Dzire">SUV Cab</option>
            </select>

            <input
              type="tel"
              name="contactNumber"
              className="form-control mb-2"
              placeholder="Phone Number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />
            <button type="submit" className="btn btn-primary cta-button">
              Book Now
            </button>
          </form>

          <div className="testimonials mt-4">
            <blockquote>"Best taxi ride I've ever had! - Delhi."</blockquote>
          </div>

          <div className="contact-info mt-3">
            <p>Call us: +91-8791796433</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
