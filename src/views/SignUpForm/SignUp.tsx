import React from 'react'
import './SignUp.css';
const SignUp = () => {
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
        <h1>Your reliable taxi service, 24/7</h1>
        <p>Book your taxi in just a few minutes</p>
       

        <form className="booking-form d-flex flex-column align-items-center mt-4">
          <input type="text" className="form-control mb-2" placeholder="Pickup location" required />
          <input type="text" className="form-control mb-2" placeholder="Drop-off location" required />
          <input type="date" className="form-control mb-2" required />
          <input type="time" className="form-control mb-2" required />
          <button type="submit" className="btn btn-primary cta-button">
          Book Now
          </button>
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

export default SignUp