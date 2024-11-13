import React from 'react';
import './AboutUs.css'
import AboutUsImage from '../../assets/aboutus/istockphoto-1086341762-612x612.jpg'
const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="row" style={{marginTop:'80px'}}>
        <div className="col-lg-6 mb-4">
          <img
            src={AboutUsImage}
            alt="About Us"
            className="img-fluid rounded-3"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="aboutus display-5 fw-bold mb-4">About Us</h1>
          <p className="aboutus">
            Welcome to Kashif Cab Service, your number one source for reliable and comfortable rides. We're dedicated to giving you the very best service, with a focus on customer satisfaction, safety, and professionalism.
          </p>
          <p className="aboutus">
            Founded in 2012, Kashif Cab Service has come a long way from its beginnings in Bareilly. Our passion for improving transportation in the city drove us to start a cab service that offers more than just a ride - we offer a complete, customer-friendly experience.
          </p>
          <p className="aboutus">
            We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <h4 className="aboutus mt-4">Our Mission</h4>
          <p className="aboutus">
            To provide fast, safe, and reliable transportation for individuals and businesses, making it easier for everyone to move around.
          </p>
          <h4 className="aboutus mt-4">Contact Us</h4>
          <p className="aboutus">
            Email: kashifkhan38374672@gmail.com
          </p>
          <p className="aboutus">
            Phone: +91-8791796433
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
